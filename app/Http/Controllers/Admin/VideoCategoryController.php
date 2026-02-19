<?php

namespace App\Http\Controllers\Admin;

use App\Helpers\ImageHelper;
use App\Http\Controllers\Controller;
use App\Models\Type;
use App\Models\VideoCategory;
use Illuminate\Http\Request;

use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Inertia\Inertia;

class VideoCategoryController extends Controller implements HasMiddleware
{
    public static function middleware(): array
    {
        return [
            new Middleware('permission:video_category view', only: ['index', 'show']),
            new Middleware('permission:video_category create', only: ['create', 'store']),
            new Middleware('permission:video_category update', only: ['edit', 'update', 'recover']),
            new Middleware('permission:video_category delete', only: ['destroy', 'destroy_image']),
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
        $category_code = $request->input('category_code');

        $query = VideoCategory::query();


        $filteredCategory = VideoCategory::where('code', $category_code)->first();
        $filteredParents = collect();
        if ($filteredCategory) {
            $filteredParents = $filteredCategory->allParents()->reverse()->values() ?: collect();

            // $allChildren = $filteredCategory->allChildren() ?: collect();
            // $childrenIds = $allChildren->pluck('id')->toArray();

            $query->where('parent_id', $filteredCategory->id);
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
                    ->orWhere('short_description', 'LIKE', "%{$search}%")
                    ->orWhere('short_description_kh', 'LIKE', "%{$search}%");
            });
        }

        $query->orderBy('id', 'desc');

        $query->with('created_user', 'updated_user', 'parent');

        $tableData = $query->paginate($perPage)->onEachSide(1);

        // return $tableData;
        // return $filteredCategory;
        return Inertia::render('Admin/VideoCategory/Index', [
            'tableData' => $tableData,
            'parents' => VideoCategory::orderBy('order_index')->orderBy('id', 'desc')->get(),
            'filteredCategory' => $filteredCategory,
            'allParents' => $filteredParents,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        return Inertia::render('Admin/VideoCategory/Create', [
            'parents' => VideoCategory::orderBy('order_index')->orderBy('id', 'desc')->get(),
            'filtered_category_id' => $request->filtered_category_id,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'code' => 'required|string|max:255',
            'parent_id' => 'nullable|string|max:255|exists:video_categories,id',
            'name' => 'required|string|max:255',
            'name_kh' => 'nullable|string|max:255',
            'order_index' => 'required|numeric',
            'short_description' => 'nullable|string',
            'short_description_kh' => 'nullable|string',
            'image' => 'nullable|mimes:jpeg,png,jpg,gif,webp,svg|max:4096',
        ]);
        // dd($request->all());


        try {
            // Add creator and updater
            $validated['created_by'] = $request->user()->id;
            $validated['updated_by'] = $request->user()->id;

            // Handle image upload if present
            if ($request->hasFile('image')) {
                $imageName = ImageHelper::uploadAndResizeImageWebp(
                    $request->file('image'),
                    'assets/images/video_categories',
                    600
                );
                $validated['image'] = $imageName;
            }

            // Create the Item Category
            VideoCategory::create($validated);

            return redirect()->back()->with('success', 'Video Category created successfully!');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors('Failed to create Video Category: ' . $e->getMessage());
        }
    }


    /**
     * Display the specified resource.
     */
    public function show(VideoCategory $video_category)
    {
        return Inertia::render('Admin/VideoCategory/Create', [
            'editData' => $video_category,
            'readOnly' => true,
            'parents' => VideoCategory::where('id', '!=', $video_category->id)->orderBy('order_index')->orderBy('id', 'desc')->get(),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(VideoCategory $video_category)
    {
        return Inertia::render('Admin/VideoCategory/Create', [
            'editData' => $video_category,
            'parents' => VideoCategory::where('id', '!=', $video_category->id)->orderBy('order_index')->orderBy('id', 'desc')->get(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, VideoCategory $video_category)
    {
        $validated = $request->validate([
            'code' => 'required|string|max:255',
            'parent_id' => 'nullable|string|max:255|exists:video_categories,id',
            'name' => 'required|string|max:255',
            'name_kh' => 'nullable|string|max:255',
            'order_index' => 'required|numeric',
            'short_description' => 'nullable|string',
            'short_description_kh' => 'nullable|string',
            'image' => 'nullable|mimes:jpeg,png,jpg,gif,webp,svg|max:4096',
        ]);

        try {
            // track updater
            $validated['updated_by'] = $request->user()->id;

            $imageFile = $request->file('image');
            unset($validated['image']);

            // Handle image upload if present
            if ($imageFile) {
                $imageName = ImageHelper::uploadAndResizeImageWebp(
                    $imageFile,
                    'assets/images/video_categories',
                    600
                );

                $validated['image'] = $imageName;

                // delete old if replaced
                if ($imageName && $video_category->image) {
                    ImageHelper::deleteImage($video_category->image, 'assets/images/video_categories');
                }
            }

            // Update
            $video_category->update($validated);

            return redirect()->back()->with('success', 'Video Category updated successfully!');
        } catch (\Exception $e) {
            return redirect()->back()->withErrors('Failed to update Video Category: ' . $e->getMessage());
        }
    }


    public function recover($id)
    {
        $video_category = VideoCategory::withTrashed()->findOrFail($id); // 👈 include soft-deleted Item Category
        $video_category->restore(); // restores deleted_at to null
        return redirect()->back()->with('success', 'Video Category recovered successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(VideoCategory $video_category)
    {
        // if ($user->image) {
        //     ImageHelper::deleteImage($user->image, 'assets/images/users');
        // }

        $video_category->delete(); // this will now just set deleted_at timestamp
        return redirect()->back()->with('success', 'Video Category deleted successfully.');
    }
}
