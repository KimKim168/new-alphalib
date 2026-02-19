<?php

use App\Http\Controllers\ThnalDataFrontPageController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Thnal/Index');
// })->name('thnal');

// Route::get('/libraries', function () {
//     return Inertia::render('Thnal/Libraries/Index');
// });

Route::get('/', [ThnalDataFrontPageController::class, 'index']);
Route::get('/libraries', [ThnalDataFrontPageController::class, 'libraries']);
Route::get('/book-detail/{id}', [ThnalDataFrontPageController::class, 'book_detail']);
// Route::get('/libraries/{id}', [LibraryDataFrontPageController::class, 'library_show']);