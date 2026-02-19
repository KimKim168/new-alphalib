<?php

use App\Http\Controllers\AlphalibFrontPageController;
use Illuminate\Support\Facades\Route;

Route::get('/', [AlphalibFrontPageController::class, 'index']);
Route::get('/about_us', [AlphalibFrontPageController::class, 'about_us']);
Route::get('/solutions', [AlphalibFrontPageController::class, 'solutions']);
Route::get('/solution/{id}', [AlphalibFrontPageController::class, 'solution_show']);
Route::get('/our_software', [AlphalibFrontPageController::class, 'our_software']);
Route::get('/our_software/{id}', [AlphalibFrontPageController::class, 'our_software_show']);
Route::get('/community', [AlphalibFrontPageController::class, 'community']);
Route::get('/blogs', [AlphalibFrontPageController::class, 'blogs']);
Route::get('/blog/{id}', [AlphalibFrontPageController::class, 'blog_show']);
Route::get('/contact_us', [AlphalibFrontPageController::class, 'contact_us']);
