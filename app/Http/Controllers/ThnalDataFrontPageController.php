<?php

namespace App\Http\Controllers;

use App\Models\BanalaiLibrary;
use App\Models\Banner;
use App\Models\LibraryData;
use App\Models\Location;
use App\Models\Resource;
use App\Models\Type;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Schema;
use Inertia\Inertia;

class ThnalDataFrontPageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $banner = Banner::first();
        $resource = Resource::orderBy('order_index')->get();
        $bannalai = BanalaiLibrary::orderBy('order_index')->get();
        // return $bannalai;
        return Inertia::render('Thnal/Index', [
            'banner' => $banner,
            'resource' => $resource,
            'bannalai' => $bannalai,
        ]);
    }
    public function book_detail()
    {
        $banner = Banner::first();
        return Inertia::render('Thnal/Libraries/ShowBook', [
            'banner' => $banner,
        ]);
    }

    public function libraries(Request $request)
    {
        $perPage = $request->input('perPage', 10);
        $search = $request->input('search', '');
        $sortBy = $request->input('sortBy', 'id');
        $sortDirection = $request->input('sortDirection', 'desc');

        $query = LibraryData::query();

        // Exclude 'about' by selecting all other columns
        $columns = Schema::getColumnListing('library_data'); // get all columns dynamically
        $columns = array_diff($columns, ['about']); // remove 'about' column
        $query->select($columns);

        if ($value = $request->input('status')) {
            $query->where('status', $value);
        }
        // Define the filters we care about
        $typeFilters = [
            'library_type_code',
            'source_of_funding_type_code',
            'class_type_code',
            'annual_budget_type_code',
            'library_system_type_code',
            'province_code',
        ];

        // Loop through and apply
        foreach ($typeFilters as $filter) {
            if ($value = $request->input($filter)) {
                $query->where($filter, $value);
            }
        }

        // ✅ relationships
        if ($request->filled('target_user_type_code')) {
            $query->whereHas('target_users', function ($q) use ($request) {
                $q->where('target_user_type_code', $request->target_user_type_code);
            });
        }

        if ($request->filled('target_age_user_type_code')) {
            $query->whereHas('age_of_target_users', function ($q) use ($request) {
                $q->where('age_target_type_code', $request->target_age_user_type_code);
            });
        }

        $query->orderBy($sortBy, $sortDirection);

        if ($search) {
            $query->where(function ($sub_query) use ($search) {
                $sub_query->where('name_of_library', 'LIKE', "%{$search}%")
                    ->orWhere('affiliated_institution', 'LIKE', "%{$search}%")
                    ->orWhere('about', 'LIKE', "%{$search}%")
                    ->orWhere('facebook_name', 'LIKE', "%{$search}%")
                    ->orWhere('website', 'LIKE', "%{$search}%")
                    ->orWhere('phone', 'LIKE', "%{$search}%")
                    ->orWhere('email', 'LIKE', "%{$search}%")
                    ->orWhere('address', 'LIKE', "%{$search}%")
                    ->orWhere('id', 'LIKE', "%{$search}%");
            });
        }


        $query->orderBy('id', 'desc');
        $query->with('funding_type', 'class_type', 'province', 'library_type');

        $tableData = $query->approved()->paginate($perPage)->onEachSide(1);
        $banner = Banner::first();
        return Inertia::render('Thnal/Libraries/Index', [
            'tableData' => $tableData,
            'libraryTypes'        => Type::group('library-type-group')->get(),
            'fundingTypes'        => Type::group('source-of-funding-type-group')->get(),
            'classTypes'          => Type::group('class-of-library-type-group')->get(),
            'provincesData' => Location::type('province')->orderBy('order_index')->orderBy('name')->get(),
            'banner' => $banner,
        ]);
    }

    // public function library_show(Request $request, string $id)
    // {
    //     $showData = LibraryData::findOrFail($id)->load('funding_type', 'class_type', 'province', 'library_type', 'target_users.type', 'age_of_target_users.type');
    //     $showData->increment('total_view_count');
    //     return Inertia::render('LibraryDataFrontPage/Libraries/Show', ['showData' => $showData]);
    // }

}
