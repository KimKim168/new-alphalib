<?php

namespace App\Http\Controllers;

use App\Models\BanalaiLibrary;
use App\Models\Page;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Schema;
use Inertia\Inertia;

class BanalaiFrontPageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $hero = Page::where('code', 'home')->with('images')->first();
        $bottom = Page::where('code', 'home-bottom')->first();
        $banalaiLibrary = BanalaiLibrary::orderBy('order_index')->limit(16)->get();
        $hasMore = $banalaiLibrary->count() > 15;
        $banalaiLibrary = $banalaiLibrary->take(15);
        // return ($banalaiLibrary);
        return Inertia::render('Banalai/Index', [
            'hero' => $hero,
            'bottom' => $bottom,
            'banalaiLibrary' => $banalaiLibrary,
            'hasMore' => $hasMore,
        ]);
    }
    public function privacy_policy()
    {
        $data = Page::where('code', 'privacy-policy')->first();
        // return ($banalaiLibrary);
        return Inertia::render('Banalai/PrivacyPolicy', [
            'data' => $data,
        ]);
    }
    public function terms_of_service()
    {
        $data = Page::where('code', 'terms-of-service')->first();
        // return ($banalaiLibrary);
        return Inertia::render('Banalai/TermsOfService', [
            'data' => $data,
        ]);
    }
    public function cookie_policy()
    {
        $data = Page::where('code', 'cookie-policy')->first();
        // return ($banalaiLibrary);
        return Inertia::render('Banalai/CookiePolicy', [
            'data' => $data,
        ]);
    }

    public function about()
    {
        $ourMission = Page::where('code', 'our-mission')
            ->with([
                'children' => fn($q) => $q->orderBy('order_index'),
                'children.images'
            ])
            ->first();

        $ourCoreValueData = Page::where('code', 'our-core-values')
            ->with([
                'children' => fn($q) => $q->orderBy('order_index'),
                'children.images'
            ])
            ->first();

        $aboutHeader = Page::where('code', 'about')->first();
        $ourStory = Page::where('code', 'our-story')->first();
        $bottom = Page::where('code', 'about-bottom')->first();

        // return $ourMission;
        return Inertia::render('Banalai/About', [
            'aboutHeader' => $aboutHeader,
            'ourMission' => $ourMission,
            'ourStory' => $ourStory,
            'ourCoreValueData' => $ourCoreValueData,
            'bottom' => $bottom,
        ]);
    }
    public function support()
    {
        $supportData = Page::where('code', 'support')
            ->with([
                'children' => fn($q) => $q->orderBy('order_index'),
                'children.images'
            ])
            ->first();

        // return $supportData;
        return Inertia::render('Banalai/Supoort', [
            'supportData' => $supportData,
        ]);
    }
    public function support_show(string $id)
    {
        $showData = Page::find($id);
        // return $showData;
        return Inertia::render('Banalai/Show', [
            'showData' => $showData,
        ]);
    }

    public function products(Request $request)
    {
        $productData = Page::where('code', 'products')->first();
        $bottom = Page::where('code', 'product-bottom')->first();
        $banalaiLibrary = BanalaiLibrary::all();

        // return ($productData);
        return Inertia::render('Banalai/Products', [
            'productData' => $productData,
            'bottom' => $bottom,
            'banalaiLibrary' => $banalaiLibrary,
        ]);
    }
    public function product_show(string $id)
    {
        $showData = BanalaiLibrary::find($id);
        // return ($showData);
        return Inertia::render('Banalai/Show', [
            'showData' => $showData,
        ]);
    }
    public function pricing(Request $request)
    {
        $pricingtData = Page::where('code', 'pricing')->with('children')->orderBy('order_index')->first();
        $featurePricingPlans = Page::where('code', 'feature-pricing-plans')->with('images')->orderBy('order_index')->first();
        // return ($featurePricingPlans);
        return Inertia::render('Banalai/Pricing', [
            'pricingtData' => $pricingtData,
            'featurePricingPlans' => $featurePricingPlans,

        ]);
    }
}
