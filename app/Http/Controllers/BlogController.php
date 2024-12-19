<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class BlogController extends Controller
{
    // Zenn API から記事を取得するメソッド
    public function getZennArticles()
    {
        try {
            // Zenn API へのリクエスト
            $response = Http::get('https://zenn.dev/api/articles?username=aya_sato&order=latest');

            // レスポンスのステータスコードと内容をログに出力
            Log::info('API Response Status: ' . $response->status());
            Log::info('API Response Body: ' . $response->body());

            // レスポンスが成功かどうかを確認
            if ($response->failed()) {
                throw new \Exception('APIリクエスト失敗: ' . $response->status());
            }

            // JSONデータをそのまま返す
            return response()->json($response->json());
        } catch (\Exception $e) {
            // エラーログを詳細に記録
            Log::error('APIリクエストエラー: ' . $e->getMessage());
            return response()->json(['error' => 'データ取得に失敗しました'], 500);
        }
    }
}
