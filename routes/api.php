<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\ApiController;

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
});