<?php

use App\Http\Controllers\BanalaiFrontPageController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [BanalaiFrontPageController::class, 'index']);

Route::get('/products', [BanalaiFrontPageController::class, 'products']);

Route::get('/product/{id}', [BanalaiFrontPageController::class, 'product_show']);

Route::get('/pricing', [BanalaiFrontPageController::class, 'pricing']);

Route::get('/about', [BanalaiFrontPageController::class, 'about']);

Route::get('/support', [BanalaiFrontPageController::class, 'support']);

Route::get('/support/{id}', [BanalaiFrontPageController::class, 'support_show']);

Route::get('/privacy_policy', [BanalaiFrontPageController::class, 'privacy_policy']);

Route::get('/terms_of_service', [BanalaiFrontPageController::class, 'terms_of_service']);

Route::get('/cookie_policy', [BanalaiFrontPageController::class, 'cookie_policy']);


Route::get('/banalai_register', function () {
    return Inertia::render('Banalai/Register');
});

Route::get('/banalai_login', function () {
    return Inertia::render('Banalai/BanalaiLogin');
});
