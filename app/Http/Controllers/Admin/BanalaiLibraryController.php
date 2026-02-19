<?php

namespace App\Http\Controllers\Admin;

use App\Helpers\FileHelper;
use App\Helpers\ImageHelper;
use App\Http\Controllers\Controller;
use App\Models\BanalaiLibrary;
use App\Models\BanalaiLibraryFile;
use App\Models\BanalaiLibraryImage;
use App\Models\Page;

use App\Models\PageImage;
use App\Models\Type;
use Illuminate\Http\Request;

use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Inertia\Inertia;

class BanalaiLibraryController extends Controller implements HasMiddleware
{
    public static function middleware(): array
    {
        return [
            new Middleware('permission:banalai_library view', only: ['index', 'show']),
            new Middleware('permission:banalai_library create', only: ['create', 'store']),
            new Middleware('permission:banalai_library update', only: ['edit', 'update', 'recover']),
            new Middleware('permission:banalai_library delete', only: ['destroy', 'destroy_image']),
        ];
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $perPage = $request->input('perPage', 10);
        $search = $request->input('search', '');
        $sortBy = $request->input('sortBy', 'id');
        $sortDirection = $request->input('sortDirection', 'desc');
        $trashed = $request->input('trashed'); // '', 'with', 'only'

        $query = BanalaiLibrary::query();

        $query->with('created_user', 'updated_user');

        // if ($status) {
        //     $query->where('status', $status);
        // }

        // Filter by trashed (soft deletes)
        if ($trashed === 'with') {
            $query->withTrashed();
        } elseif ($trashed === 'only') {
            $query->onlyTrashed();
        }

        $query->orderBy($sortBy, $sortDirection);

        if ($search) {
            $query->where(function ($sub_query) use ($search) {
                return $sub_query->where('name', 'LIKE', "%{$search}%")
                    ->orWhere('name_kh', 'LIKE', "%{$search}%")
                    ->orWhere('id', 'LIKE', "%{$search}%")
                    ->orWhere('short_description', 'LIKE', "%{$search}%")
                    ->orWhere('short_description_kh', 'LIKE', "%{$search}%");
            });
        }

        $query->orderBy('id', 'desc');

        $tableData = $query->paginate($perPage)->onEachSide(1);

        return Inertia::render('Admin/BanalaiLibrary/Index', [
            'tableData' => $tableData,
            'types' => Type::orderBy('order_index')->orderBy('name')->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        return Inertia::render('Admin/BanalaiLibrary/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request->all());

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'name_kh' => 'nullable|string|max:255',
            'short_description' => 'nullable|string',
            'short_description_kh' => 'nullable|string',
            'long_description' => 'nullable|string',
            'long_description_kh' => 'nullable|string',
            'link' => 'nullable|string',
            'icon' => 'nullable|mimes:jpeg,png,jpg,gif,webp,svg|max:4096',
            'order_index' => 'required|numeric',
            'phone' => 'nullable|string|max:30',
            'telegram' => 'nullable|string|max:255',
            'email' => 'nullable|email|max:255',
            'library_supporter_name' => 'nullable|string|max:255',
            'library_supporter_chat_link' => 'nullable|string|max:255',
            'website' => 'nullable|url|max:255',
            'facebook' => 'nullable|url|max:255',
        ]);

        if (trim($validated['long_description']) === '<p>&nbsp;</p>') {
            $validated['long_description'] = null;
        }

        if (trim($validated['long_description_kh']) === '<p>&nbsp;</p>') {
            $validated['long_description_kh'] = null;
        }

        try {
            // Add creator and updater
            $validated['created_by'] = $request->user()->id;
            $validated['updated_by'] = $request->user()->id;

            // Handle image upload if present
            if ($request->hasFile('icon')) {
                $imageName = ImageHelper::uploadAndResizeImageWebp(
                    $request->file('icon'),
                    'assets/images/banalai_library',
                    600
                );
                $validated['icon'] = $imageName;
            }

            $image_files = $request->file('images');
            unset($validated['images']);

            $item_files = $request->file('upload_files');
            unset($validated['upload_files']);

            // Create the Page
            $created_page = BanalaiLibrary::create($validated);

            if ($image_files) {
                try {
                    foreach ($image_files as $image) {
                        $created_image_name = ImageHelper::uploadAndResizeImageWebp($image, 'assets/images/banalai_library', 600);
                        BanalaiLibraryImage::create([
                            'image' => $created_image_name,
                            'page_id' => $created_page->id,
                        ]);
                    }
                } catch (\Exception $e) {
                    return redirect()->back()->with('error', 'Failed to upload images: ' . $e->getMessage());
                }
            }

            if ($item_files) {
                try {
                    foreach ($item_files as $item_file) {
                        $created_file_name = FileHelper::uploadFile($item_file, 'assets/files/bannalai', false);

                        if ($created_file_name) {
                            BanalaiLibraryFile::create([
                                'file_name' => $created_file_name,
                                'file_type' => $item_file->getClientMimeType(),
                                'banalai_library_id' => $created_page->id,
                            ]);
                        }
                    }
                } catch (\Exception $e) {
                    return redirect()->back()->with('error', 'Failed to upload files: ' . $e->getMessage());
                }
            }


            return redirect()->back()->with('success', 'Library created successfully!');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors('Failed to create Library: ' . $e->getMessage());
        }
    }


    /**
     * Display the specified resource.
     */
    public function show(BanalaiLibrary $library)
    {
        // dd($page->loadCount('children'));
        return Inertia::render('Admin/BanalaiLibrary/Create', [
            'editData' => $library,
            'readOnly' => true,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(BanalaiLibrary $library)
    {
        return Inertia::render('Admin/BanalaiLibrary/Create', [
            'editData' => $library->load('files'),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, BanalaiLibrary $library)
    {
        // dd($request->all());
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'name_kh' => 'nullable|string|max:255',
            'short_description' => 'nullable|string',
            'short_description_kh' => 'nullable|string',
            'long_description' => 'nullable|string',
            'long_description_kh' => 'nullable|string',
            'link' => 'nullable|string',
            'icon' => 'nullable|mimes:jpeg,png,jpg,gif,webp,svg|max:4096',
            'images.*' => 'nullable|mimes:jpeg,png,jpg,gif,webp,svg|max:4096',
            'order_index' => 'required|numeric',
            'phone' => 'nullable|string|max:30',
            'telegram' => 'nullable|string|max:255',
            'email' => 'nullable|email|max:255',
            'library_supporter_name' => 'nullable|string|max:255',
            'library_supporter_chat_link' => 'nullable|string|max:255',
            'website' => 'nullable|url|max:255',
            'facebook' => 'nullable|url|max:255',
        ]);

        if (trim($validated['long_description']) === '<p>&nbsp;</p>') {
            $validated['long_description'] = null;
        }

        if (trim($validated['long_description_kh']) === '<p>&nbsp;</p>') {
            $validated['long_description_kh'] = null;
        }

        try {
            // track updater
            $validated['updated_by'] = $request->user()->id;

            $imageFile = $request->file('icon');
            unset($validated['icon']);

            // Handle image upload if present
            if ($imageFile) {
                $imageName = ImageHelper::uploadAndResizeImageWebp(
                    $imageFile,
                    'assets/images/banalai_library',
                    600
                );

                $validated['icon'] = $imageName;

                // delete old if replaced
                if ($imageName && $library->image) {
                    ImageHelper::deleteImage($library->image, 'assets/images/banalai_library');
                }
            }

            $image_files = $request->file('images');
            unset($validated['images']);

            $item_files = $request->file('upload_files');
            unset($validated['upload_files']);

            // Update
            $library->update($validated);

            if ($image_files) {
                try {
                    foreach ($image_files as $image) {
                        $created_image_name = ImageHelper::uploadAndResizeImageWebp($image, 'assets/images/banalai_library', 600);
                        BanalaiLibraryImage::create([
                            'image' => $created_image_name,
                            'page_id' => $library->id,
                        ]);
                    }
                } catch (\Exception $e) {
                    return redirect()->back()->with('error', 'Failed to upload images: ' . $e->getMessage());
                }
            }

            if ($item_files) {
                try {
                    foreach ($item_files as $item_file) {
                        $created_file_name = FileHelper::uploadFile($item_file, 'assets/files/bannalai', false);

                        if ($created_file_name) {
                            BanalaiLibraryFile::create([
                                'file_name' => $created_file_name,
                                'file_type' => $item_file->getClientMimeType(),
                                'banalai_library_id' => $library->id,
                            ]);
                        }
                    }
                } catch (\Exception $e) {
                    return redirect()->back()->with('error', 'Failed to upload files: ' . $e->getMessage());
                }
            }

            return redirect()->back()->with('success', 'Library updated successfully!');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors('Failed to update Library: ' . $e->getMessage());
        }
    }


    public function recover($id)
    {
        $library = BanalaiLibrary::withTrashed()->findOrFail($id); // 👈 include soft-deleted Page
        $library->restore(); // restores deleted_at to null
        return redirect()->back()->with('success', 'Library recovered successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(BanalaiLibrary $library)
    {
        // if ($user->image) {
        //     ImageHelper::deleteImage($user->image, 'assets/images/users');
        // }

        $library->delete(); // this will now just set deleted_at timestamp
        return redirect()->back()->with('success', 'Library deleted successfully.');
    }

    public function destroy_image(BanalaiLibraryImage $image)
    {
        // Debugging (Check if model is found)
        if (!$image) {
            return redirect()->back()->with('error', 'Image not found.');
        }

        // Call helper function to delete image
        ImageHelper::deleteImage($image->image, 'assets/images/banalai_library');

        // Delete from DB
        $image->delete();

        return redirect()->back()->with('success', 'Image deleted successfully.');
    }
    public function destroy_file(BanalaiLibraryFile $file)
    {
        // Debugging (Check if model is found)
        if (!$file) {
            return redirect()->back()->with('error', 'File not found.');
        }

        // Call helper function to delete image
        FileHelper::deleteFile($file->file_name, 'assets/files/posts');

        // Delete from DB
        $file->delete();

        return redirect()->back()->with('success', 'File deleted successfully.');
    }
}
