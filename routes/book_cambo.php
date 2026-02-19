<?php

use App\Http\Controllers\BookCamboFrontPageController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', [BookCamboFrontPageController::class, 'index']);
Route::get('/books', [BookCamboFrontPageController::class, 'books']);
Route::get('/publishers', [BookCamboFrontPageController::class, 'publishers']);
Route::get('/publishers/{publisher}', [BookCamboFrontPageController::class, 'publisher_show']);
Route::get('/authors', [BookCamboFrontPageController::class, 'authors']);
Route::get('/authors/{author}', [BookCamboFrontPageController::class, 'author_show']);

Route::get('/about', [BookCamboFrontPageController::class, 'about']);
Route::get('/support', [BookCamboFrontPageController::class, 'support']);

Route::get('/posts', [BookCamboFrontPageController::class, 'posts']);
Route::get('/posts/{post}', [BookCamboFrontPageController::class, 'post_show']);
Route::get('/books_by_category', [BookCamboFrontPageController::class, 'books_by_category']);
Route::get('/items/{item}', [BookCamboFrontPageController::class, 'item_show']);

// Route::get('/books_collection', function () {
//     return Inertia::render('BookCambo/BookCollerction/Index');
// });

// Route::get('/about_us', function () {
//     return Inertia::render('BookCambo/AboutUs/Index');
// });

// Route::get('/news', function () {
//     return Inertia::render('BookCambo/Banner/Index');
// });

// Route::get('/support', function () {
//     return Inertia::render('BookCambo/Support/Index');
// });

// Route::get('/publisher', function () {
//     return Inertia::render('BookCambo/Publisher/Index');
// });

Route::get('/register2', function () {
    return Inertia::render('BookCambo/Register/Index');
});

Route::get('/auther', function () {
    return Inertia::render('BookCambo/Auther/Index');
});

Route::get('/detail/{id}', function ($id) {
    return Inertia::render('BookCambo/Detail');
});

Route::get('/user-name', function () {
    return Inertia::render('BookCambo/User/Index');
});
