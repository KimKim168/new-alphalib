<?php

use App\Http\Controllers\LibraryServiceFrontPageController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [LibraryServiceFrontPageController::class, 'index']);
Route::get('/how_to', [LibraryServiceFrontPageController::class, 'how_to']);
Route::get('/videos/{id}', [LibraryServiceFrontPageController::class, 'video']);
Route::get('/detail/{id}', [LibraryServiceFrontPageController::class, 'show']);


// Route::get('/banalai_register', function () {
//     return Inertia::render('Banalai/Register');
// });

// Route::get('/banalai_login', function () {
//     return Inertia::render('Banalai/BanalaiLogin');
// });
