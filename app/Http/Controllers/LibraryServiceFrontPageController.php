<?php

namespace App\Http\Controllers;

use App\Models\Page;
use App\Models\Post;
use App\Models\PostCategory;
use App\Models\Video;
use App\Models\VideoCategory;
use Inertia\Inertia;
use Illuminate\Http\Request;

class LibraryServiceFrontPageController extends Controller
{

    public function index()
    {
        $isLoggedIn = auth()->check();

        $videoHeader = Page::where('code', 'content-header-home-top')->first();
        $videoHeaderBottom = Page::where('code', 'content-header-home-bottom')->first();

        $heroVideo = Video::where('category_code', 'hero-video')
            ->when(!$isLoggedIn, function ($query) {
                $query->where('status', 'published');
            })
            ->with('files')
            ->first();

        $allVideos = Video::when(!$isLoggedIn, function ($query) {
            $query->where('status', 'published');
        })
            ->with('files')
            ->orderBy('id', 'desc')
            ->get();

        $allResoures = Post::when(!$isLoggedIn, function ($query) {
            $query->where('status', 'published');
        })
            ->orderBy('id', 'desc')
            ->get();

        return Inertia::render('LibraryService/Index', [
            'videoHeader' => $videoHeader,
            'videoHeaderBottom' => $videoHeaderBottom,
            'heroVideo' => $heroVideo,
            'allVideos' => $allVideos,
            'allResoures' => $allResoures,
        ]);
    }

  public function how_to()
{
    $isLoggedIn = auth()->check();

    $header = Page::where('code', 'content-header-how-to-page')->first();

    $categoryWithPostsData = VideoCategory::with([
        'videos' => function ($query) use ($isLoggedIn) {
            $query
                ->when(!$isLoggedIn, function ($q) {
                    $q->where('status', 'published');
                })
                ->orderBy('created_at', 'desc')
                ->select([
                    'id',
                    'category_code',
                    'thumbnail',
                    'name',
                    'name_kh',
                    'short_description',
                    'short_description_kh',
                ]);
        }
    ])
        ->orderBy('order_index')
        ->orderBy('name')
        ->get();

    return Inertia::render('LibraryService/HowTo', [
        'header' => $header,
        'categoryWithPostsData' => $categoryWithPostsData,
    ]);
}


    public function video(Request $request, $id)
    {
        $isLoggedIn = auth()->check();

        $showVideoData = Video::when(!$isLoggedIn, function ($query) {
            $query->where('status', 'published');
        })
            ->with('files')
            ->findOrFail($id);

        $relatedVideoData = Video::when(!$isLoggedIn, function ($query) {
            $query->where('status', 'published');
        })
            ->where('category_code', $showVideoData->category_code)
            ->with('files')
            ->get();

        $showVideoData->increment('total_view_count');

        return Inertia::render('LibraryService/Video', [
            'showVideoData' => $showVideoData,
            'relatedVideoData' => $relatedVideoData,
        ]);
    }
    public function show($id)
    {
        $isLoggedIn = auth()->check();

        $showData = Post::when(!$isLoggedIn, function ($query) {
            $query->where('status', 'published');
        })
            ->findOrFail($id);

        $relatedData = Post::when(!$isLoggedIn, function ($query) {
            $query->where('status', 'published');
        })
            ->where('category_code', $showData->category_code)
            ->get();

        return Inertia::render('LibraryService/Detail', [
            'showData' => $showData,
            'relatedData' => $relatedData,
        ]);
    }
}
