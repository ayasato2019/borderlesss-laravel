<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Http;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/works', function () {
    return Inertia::render('Works/app');
})->name('works');

Route::get('/service', function () {
    return Inertia::render('Service/app');
})->name('service');

Route::get('/zenn/articles', function () {
    $response = Http::get('https://zenn.dev/api/articles?username=aya_sato&order=latest');
    return response()->json($response->json());
});

Route::get('/blog', function () {
    return Inertia::render('Blog/app');
})->name('blog');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::get('/privacy-policy', function () {
    return Inertia::render('PrivacyPolicy');
})->name('PrivacyPolicy');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
