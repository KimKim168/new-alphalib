<?php

use Illuminate\Support\Facades\Route;

use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

// ==== Switch Language ====
Route::get('/lang/{locale}', function ($locale) {
    if (!in_array($locale, ['en', 'kh'])) {
        abort(404);
    }
    Session::put('locale', $locale);
    return redirect()->back();
});

// ==== Test Error ====
Route::get('/test_error', function () {
    abort('503', 'hi');
});

// ==== Library Member Card ====
// Route::get('/library_member_card', function () {
//     return Inertia::render('LibraryMemberCard/StudentIdCard');
// });
Route::get('/library_member_card', function () {
    return Inertia::render('LibraryMemberCard/Index');
});


// ==== Default Routes ====
require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
require __DIR__ . '/file_manager.php';

// ====Admin & LibraryDataFrontPage Routes ====
require __DIR__ . '/admin_route.php';
// require __DIR__ . '/library_data_route.php';

// ==== Other Routes ====
// require __DIR__ . '/elibrary.php';
// require __DIR__ . '/library_service.php';
// require __DIR__ . '/banalai.php';
// require __DIR__ . '/library_data_route.php';

// require __DIR__ . '/book_cambo.php';
// require __DIR__ . '/buddhist.php';
// require __DIR__ . '/thnal.php';
require __DIR__ . '/alphalib.php';
