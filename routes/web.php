<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Http;
use App\Http\Controllers\WorkController;
use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\ApiController;

/* home */

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

/* works */
Route::get('/works', function () {
    return Inertia::render('Works/app');
})->name('works');

/* about */
Route::get('/about', function () {
    return Inertia::render('About/app');
})->name('about');

/* service */
Route::get('/service', function () {
    return Inertia::render('Service/app');
})->name('service');

/* Blog */
Route::get('/blog', function () {
    return Inertia::render('Blog/app');
})->name('blog');

Route::get('api/blog', function () {
    try {
        $response = Http::get('https://zenn.dev/api/articles?username=aya_sato&order=latest');
        
        // レスポンスのステータスコードと内容をログに出力
        Log::info('API Response Status: ' . $response->status());
        Log::info('API Response Body: ' . $response->body());
        
        // レスポンスが成功かどうかを確認
        if ($response->failed()) {
            throw new \Exception('APIリクエスト失敗: ' . $response->status());
        }

        return response()->json($response->json());
    } catch (\Exception $e) {
        // エラーログを詳細に記録
        Log::error('APIリクエストエラー: ' . $e->getMessage());
        return response()->json(['error' => 'データ取得に失敗しました'], 500);
    }
    dd($response);
});

/* conact */
Route::get('/contact', [ContactController::class, 'index'])->name('contact');
Route::post('/contact/confirm', [ContactController::class, 'confirm'])->name('contact.confirm');
Route::post('/contact/thanks', [ContactController::class, 'send'])->name('contact.thanks');

/* privacyplicy */
Route::get('/privacy-policy', function () {
    return Inertia::render('PrivacyPolicy');
})->name('PrivacyPolicy');

/* admin */
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    // パスワード忘れ
    Route::get('/forget')->name('index');
    // プロフィール管理
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    // 制作実績の管理（CRUD）
    Route::prefix('dashboard/works')->name('dashboard.works.')->group(function () {
        Route::get('/', [WorkController::class, 'index'])->name('index'); // 管理画面用一覧
        Route::get('/create', [WorkController::class, 'create'])->name('create'); // 新規作成画面
        Route::post('/', [WorkController::class, 'store'])->name('store'); // 新規作成処理
    });
});

require __DIR__ . '/auth.php';
