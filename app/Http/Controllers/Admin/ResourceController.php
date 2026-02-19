<?php

namespace App\Http\Controllers\Admin;

use App\Helpers\ImageHelper;
use App\Http\Controllers\Controller;
use App\Models\BanalaiLibraryImage;
use App\Models\Resource;
use App\Models\Type;
use Illuminate\Http\Request;

use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Inertia\Inertia;

class ResourceController extends Controller implements HasMiddleware
{
    public static function middleware(): array
    {
        return [
            new Middleware('permission:resource view', only: ['index', 'show']),
            new Middleware('permission:resource create', only: ['create', 'store']),
            new Middleware('permission:resource update', only: ['edit', 'update', 'recover']),
            new Middleware('permission:resource delete', only: ['destroy', 'destroy_image']),
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

        $query = Resource::query();

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

        return Inertia::render('Admin/Resource/Index', [
            'tableData' => $tableData,
            'types' => Type::orderBy('order_index')->orderBy('name')->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        return Inertia::render('Admin/Resource/Create');
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

            // Create the Page
            $created_page = Resource::create($validated);

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

            return redirect()->back()->with('success', 'Resource created successfully!');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors('Failed to create Resource: ' . $e->getMessage());
        }
    }


    /**
     * Display the specified resource.
     */
    public function show(Resource $resource)
    {
        // dd($page->loadCount('children'));
        return Inertia::render('Admin/Resource/Create', [
            'editData' => $resource,
            'readOnly' => true,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Resource $resource)
    {
        return Inertia::render('Admin/Resource/Create', [
            'editData' => $resource,

        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Resource $resource)
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
                if ($imageName && $resource->image) {
                    ImageHelper::deleteImage($resource->image, 'assets/images/banalai_library');
                }
            }

            $image_files = $request->file('images');
            unset($validated['images']);

            // Update
            $resource->update($validated);

            if ($image_files) {
                try {
                    foreach ($image_files as $image) {
                        $created_image_name = ImageHelper::uploadAndResizeImageWebp($image, 'assets/images/banalai_library', 600);
                        BanalaiLibraryImage::create([
                            'image' => $created_image_name,
                            'page_id' => $resource->id,
                        ]);
                    }
                } catch (\Exception $e) {
                    return redirect()->back()->with('error', 'Failed to upload images: ' . $e->getMessage());
                }
            }

            return redirect()->back()->with('success', 'Library updated successfully!');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors('Failed to update Library: ' . $e->getMessage());
        }
    }


    public function recover($id)
    {
        $resource = Resource::withTrashed()->findOrFail($id); // 👈 include soft-deleted Page
        $resource->restore(); // restores deleted_at to null
        return redirect()->back()->with('success', 'Library recovered successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Resource $resource)
    {
        // if ($user->image) {
        //     ImageHelper::deleteImage($user->image, 'assets/images/users');
        // }

        $resource->delete(); // this will now just set deleted_at timestamp
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
}
