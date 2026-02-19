<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use App\Models\Page;
use App\Models\Post;
use Inertia\Inertia;

class AlphalibFrontPageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $slides = Banner::where('type_code','home-page-banner')->get();
        $hero = Page::where('code','about')->with('images')->first();
        $ourSoftwares = Page::where('code','our-softwares')->with('children')->first();
        $usingAlphalib = Page::where('code','who-is-using-alphalib')->with('children')->first();
        // return $usingAlphalib;
        return Inertia::render('Alphalib/Index', [
            'slides' => $slides,
            'hero' => $hero,
            'ourSoftwares' => $ourSoftwares,
            'usingAlphalib' => $usingAlphalib,
        ]);
    }
    public function about_us()
    {
        $banner = Banner::where('type_code','about-page-banner')->first();
        $hero = Page::where('code','about')->with('images')->first();
        $community = Page::where('code','community')->with('children')->first();
        // return $communnity;
        return Inertia::render('Alphalib/About', [
            'banner' => $banner,
            'hero' => $hero,
            'community' => $community,
        ]);
    }
    public function contact_us()
    {
        $banner = Banner::where('type_code','contact-page-banner')->first();
        // return $communnity;
        return Inertia::render('Alphalib/Contact', [
            'banner' => $banner,
        ]);
    }
    public function solutions()
    {
        $banner = Banner::where('type_code','solution-page-banner')->first();
        $ourSolutions = Page::where('code','our-solutions')->with('children')->first();
        // return $ourSolutions;
        return Inertia::render('Alphalib/Services/Index', [
            'banner' => $banner,
            'ourSolutions' => $ourSolutions,
        ]);
    }
    public function our_software()
    {
        $banner = Banner::where('type_code','our-software-banner')->first();
        $ourSoftwares = Page::where('code','our-softwares')->with('children')->first();
        // return $ourSolutions;
        return Inertia::render('Alphalib/OurSoftware/Index', [
            'banner' => $banner,
            'ourSoftwares' => $ourSoftwares,
        ]);
    }

     public function community()
    {
        $banner = Banner::where('type_code','community-page-banner')->first();
        $hero = Page::where('code','about')->with('images')->first();
        $community = Page::where('code','community')->with('children')->first();
        // return $banner;
        return Inertia::render('Alphalib/Community/Index', [
            'banner' => $banner,
            'hero' => $hero,
            'community' => $community,
        ]);
    }
     public function blogs()
    {
        $banner = Banner::where('type_code','blog-page-banner')->first();
        $data = Post::get();
        // return $data;
        return Inertia::render('Alphalib/Blogs/Index', [
            'banner' => $banner,
            'data' => $data,
        ]);
    }
    public function blog_show($id)
    {
        $data = Post::find($id);
        // return $data;
        return Inertia::render('Alphalib/Blogs/Show', [
            'data' => $data,
        ]);
    }
    public function solution_show($id)
    {
        $data = Page::find($id);
        // return $data;
        return Inertia::render('Alphalib/Services/Show', [
            'data' => $data,
        ]);
    }

    public function our_software_show($id)
    {
        $data = Page::find($id);
        // return $data;
        return Inertia::render('Alphalib/OurSoftware/Show', [
            'data' => $data,
        ]);
    }

}
