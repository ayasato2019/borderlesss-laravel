<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Work;
use Illuminate\Support\Facades\Artisan;

class WorkController extends Controller
{
    // ゲスト用の作品一覧表示
    public function index()
    {
        $works = Work::all();
        return Inertia::render('Works/app', ['works' => $works]);
    }

    // 新規作成画面の表示
    public function create()
    {
        return Inertia::render('Works/Create');
    }

    // 制作実績の登録
    public function store(Request $request)
    {
        try {
            Artisan::call('migrate');

            // バリデーション
            $validated = $request->validate([
                'url' => 'required|url',
                'alt' => 'required|string',
                'imagePng' => 'required|string',
                'imageWebp' => 'required|string',
                'comment' => 'required|string',
                'hearing' => 'boolean',
                'design' => 'boolean',
                'coding' => 'boolean',
                'domain' => 'boolean',
                'server_upload' => 'boolean',
                'aftercare' => 'boolean',
            ]);
    
            // データ保存
            Work::create($validated);
    
            // 成功時にダッシュボードにリダイレクト
            return redirect()->route('dashboard')->with('success', '新しい制作実績が追加されました');
    
        } catch (\Exception $e) {
            // エラーメッセージのセッション保存
            return back()->withErrors(['error' => 'エラーが発生しました。'])->withInput();
        }
    }
}    