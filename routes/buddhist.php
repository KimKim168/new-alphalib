<?php

use App\Http\Controllers\BuddhistFrontPageController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [BuddhistFrontPageController::class, 'index']);
Route::get('/posts', [BuddhistFrontPageController::class, 'posts']);
Route::get('/posts/{id}', [BuddhistFrontPageController::class, 'post_show']);
Route::get('/about', [BuddhistFrontPageController::class, 'about']);

// Route::get('/news', function () {
//     return Inertia::render('Buddhist/News/Index');
// });

// Route::get('/detail/{id}', function ($id) {
//     return Inertia::render('Buddhist/Detail/Index');
// });

// Route::get('/khmer_legends', function () {
//     return Inertia::render('Buddhist/KhmerLegend/Index');
// });

// Route::get('/library', function () {
//     return Inertia::render('Buddhist/Library/Index');
// });

// Route::get('/magazine', function () {
//     return Inertia::render('Buddhist/Magazine/Index');
// });

// Route::get('/buddhist_time', function () {
//     return Inertia::render('Buddhist/BuddhistTime/Index');
// });