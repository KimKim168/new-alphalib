<?php

namespace App\Http\Controllers\Admin;

use App\Helpers\FileHelper;
use App\Helpers\ImageHelper;
use App\Http\Controllers\Controller;
use App\Models\Item;
use App\Models\Language;
use App\Models\ItemCategory;
use App\Models\ItemFile;
use App\Models\ItemImage;
use App\Models\Type;
use App\Models\User;
use App\Models\Video;
use App\Models\VideoCategory;
use App\Models\VideoFile;
use App\Models\VideoImage;
use Illuminate\Http\Request;

use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Inertia\Inertia;

class VideoController extends Controller implements HasMiddleware
{
    public static function middleware(): array
    {
        return [
            new Middleware('permission:video view', only: ['index', 'show']),
            new Middleware('permission:video create', only: ['create', 'store']),
            new Middleware('permission:video update', only: ['edit', 'update', 'recover']),
            new Middleware('permission:video delete', only: ['destroy', 'destroy_image']),
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
        $file_type_code = $request->input('file_type_code');
        $category_code = $request->input('category_code');
        $status = $request->input('status');
        $trashed = $request->input('trashed'); // '', 'with', 'only'

        $query = Video::query();

        if ($file_type_code) {
            $query->where('file_type_code', $file_type_code);
        }

        if ($category_code) {
            $query->where('category_code', $category_code);
        }

        if ($status) {
            $query->where('status', $status);
        }

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
                    ->orWhere('file_type_code', 'LIKE', "%{$search}%")
                    ->orWhere('category_code', 'LIKE', "%{$search}%")
                    ->orWhere('short_description', 'LIKE', "%{$search}%")
                    ->orWhere('short_description_kh', 'LIKE', "%{$search}%");
            });
        }

        $query->orderBy('id', 'desc');

        $query->with('created_user', 'updated_user', 'file_type', 'category');

        $tableData = $query->paginate($perPage)->onEachSide(1);

        return Inertia::render('Admin/Video/Index', [
            'tableData' => $tableData,
            'fileTypes' => Type::where('group_code', 'video-file-type-group')->withCount('file_type_videos')->orderBy('order_index')->orderBy('name')->get(),
            'categories' => VideoCategory::orderBy('order_index')
                ->withCount('videos')
                ->orderBy('name')
                ->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Video/Create', [
            'fileTypes' => Type::where('group_code', 'video-file-type-group')
                ->orderBy('order_index')
                ->orderBy('name')
                ->get(),
            'categories' => VideoCategory::orderBy('order_index')
                ->orderBy('name')
                ->get(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request->all());
        $validated = $request->validate([
            'category_code' => 'nullable|string|max:255|exists:video_categories,code',
            'file_type_code' => 'nullable|string|max:255|exists:types,code',
            'name' => 'required|string|max:255',
            'name_kh' => 'nullable|string|max:255',
            'status' => 'nullable|string|max:255',

            'published_year' => 'nullable|numeric|min:1000',
            'published_month' => 'nullable|numeric|min:1|max:12',
            'published_day' => 'nullable|numeric|min:1|max:31',

            'short_description' => 'nullable|string',
            'short_description_kh' => 'nullable|string',
            'long_description' => 'nullable|string',
            'long_description_kh' => 'nullable|string',
            'external_link' => 'nullable|string',
            'thumbnail' => 'nullable|mimes:jpeg,png,jpg,gif,webp,svg|max:4096',
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
            if ($request->hasFile('thumbnail')) {
                $imageName = ImageHelper::uploadAndResizeImageWebp(
                    $request->file('thumbnail'),
                    'assets/images/videos',
                    600
                );
                $validated['thumbnail'] = $imageName;
            }

            $image_files = $request->file('images');
            unset($validated['images']);

            $video_files = $request->file('files');
            unset($validated['files']);

            // Create the video
            $created_video = Video::create($validated);

            if ($image_files) {
                try {
                    foreach ($image_files as $image) {
                        $created_image_name = ImageHelper::uploadAndResizeImageWebp($image, 'assets/images/videos', 600);
                        ItemImage::create([
                            'image' => $created_image_name,
                            'video_id' => $created_video->id,
                        ]);
                    }
                } catch (\Exception $e) {
                    return redirect()->back()->with('error', 'Failed to upload images: ' . $e->getMessage());
                }
            }
            if ($video_files) {
                try {
                    foreach ($video_files as $video_file) {
                        $created_file_name = FileHelper::uploadFile($video_file, 'assets/files/videos', false);

                        if ($created_file_name) {
                            VideoFile::create([
                                'file_name' => $created_file_name,
                                'file_type' => $video_file->getClientMimeType(),
                                'video_id' => $created_video->id,
                            ]);
                        }
                    }
                } catch (\Exception $e) {
                    return redirect()->back()->with('error', 'Failed to upload files: ' . $e->getMessage());
                }
            }


            return redirect()->back()->with('success', 'Item created successfully!');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors('Failed to create Item: ' . $e->getMessage());
        }
    }


    /**
     * Display the specified resource.
     */
    public function show(Video $video)
    {
        // dd($video->loadCount('category'));
        return Inertia::render('Admin/Video/Create', [
            'editData' => $video->loadCount('category')->load('images', 'files'),
            'readOnly' => true,
            'fileTypes' => Type::where('group_code', 'video-file-type-group')
                ->orderBy(column: 'order_index')
                ->orderBy('name')
                ->get(),
            'categories' => VideoCategory::orderBy('order_index')
                ->orderBy('name')
                ->get(),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Video $video)
    {
        return Inertia::render('Admin/Video/Create', [
            'editData' => $video->loadCount('category')->load('images', 'files'),
            'fileTypes' => Type::where('group_code', 'video-file-type-group')
                ->orderBy('order_index')
                ->orderBy('name')
                ->get(),
            'categories' => VideoCategory::orderBy('order_index')
                ->orderBy('name')
                ->get(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Video $video)
    {
        $validated = $request->validate([
            'category_code' => 'nullable|string|max:255|exists:video_categories,code',
            'file_type_code' => 'nullable|string|max:255|exists:types,code',
            'name' => 'required|string|max:255',
            'name_kh' => 'nullable|string|max:255',
            'status' => 'nullable|string|max:255',

            'published_year' => 'nullable|numeric|min:1900',
            'published_month' => 'nullable|numeric|min:1|max:12',
            'published_day' => 'nullable|numeric|min:1|max:31',

            'short_description' => 'nullable|string',
            'short_description_kh' => 'nullable|string',
            'long_description' => 'nullable|string',
            'long_description_kh' => 'nullable|string',
            'external_link' => 'nullable|string',
            'thumbnail' => 'nullable|mimes:jpeg,png,jpg,gif,webp,svg|max:4096',
            'images.*' => 'nullable|mimes:jpeg,png,jpg,gif,webp,svg|max:4096',
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

            $imageFile = $request->file('thumbnail');
            unset($validated['thumbnail']);

            // Handle image upload if present
            if ($imageFile) {
                $imageName = ImageHelper::uploadAndResizeImageWebp(
                    $imageFile,
                    'assets/images/videos',
                    600
                );

                $validated['thumbnail'] = $imageName;

                // delete old if replaced
                if ($imageName && $video->image) {
                    ImageHelper::deleteImage($video->image, 'assets/images/videos');
                }
            }

            $image_files = $request->file('images');
            unset($validated['images']);

            $video_files = $request->file('files');
            unset($validated['files']);

            // Remove from validated before updating the item

            // Update
            $video->update($validated);


            if ($image_files) {
                try {
                    foreach ($image_files as $image) {
                        $created_image_name = ImageHelper::uploadAndResizeImageWebp($image, 'assets/images/videos', 600);
                        ItemImage::create([
                            'image' => $created_image_name,
                            'video_id' => $video->id,
                        ]);
                    }
                } catch (\Exception $e) {
                    return redirect()->back()->with('error', 'Failed to upload images: ' . $e->getMessage());
                }
            }

            if ($video_files) {
                try {
                    foreach ($video_files as $video_file) {
                        $created_file_name = FileHelper::uploadFile($video_file, 'assets/files/videos', false);

                        if ($created_file_name) {
                            VideoFile::create([
                                'file_name' => $created_file_name,
                                'file_type' => $video_file->getClientMimeType(),
                                'video_id' => $video->id,
                            ]);
                        }
                    }
                } catch (\Exception $e) {
                    return redirect()->back()->with('error', 'Failed to upload files: ' . $e->getMessage());
                }
            }

            return redirect()->back()->with('success', 'Item updated successfully!');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors('Failed to update Item: ' . $e->getMessage());
        }
    }


    public function recover($id)
    {
        $video = Video::withTrashed()->findOrFail($id); // 👈 include soft-deleted Item
        $video->restore(); // restores deleted_at to null
        return redirect()->back()->with('success', 'Item recovered successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Video $video)
    {
        // if ($user->image) {
        //     ImageHelper::deleteImage($user->image, 'assets/images/users');
        // }

        $video->delete(); // this will now just set deleted_at timestamp
        return redirect()->back()->with('success', 'Video deleted successfully.');
    }

    public function destroy_image(VideoImage $image)
    {
        // Debugging (Check if model is found)
        if (!$image) {
            return redirect()->back()->with('error', 'Image not found.');
        }

        // Call helper function to delete image
        ImageHelper::deleteImage($image->image, 'assets/images/videos');

        // Delete from DB
        $image->delete();

        return redirect()->back()->with('success', 'Image deleted successfully.');
    }
    public function destroy_file(VideoFile $file)
    {
        // Debugging (Check if model is found)
        if (!$file) {
            return redirect()->back()->with('error', 'File not found.');
        }

        // Call helper function to delete image
        // FileHelper::deleteFile($file->file_name, 'assets/files/videos');

        // Delete from DB
        $file->delete();

        return redirect()->back()->with('success', 'File deleted successfully.');
    }
}
