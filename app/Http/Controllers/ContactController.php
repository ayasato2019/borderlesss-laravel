<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\ContactFormRequest;
use App\Mail\ContactSendmail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class ContactController extends Controller
{
    // フォームの初期表示
    public function index()
    {
        return Inertia::render('Contact/app');
    }

    // 確認画面の表示（POSTメソッド）
    public function confirm(ContactFormRequest $request)
    {
        // 入力されたデータをセッションに保存
        // $request->session()->put('contactData', $request->all());

        // 確認ページを表示
        return Inertia::render('Contact/confirm', [
            'data' => $request->all()
        ]);    
    }

    // 送信処理
    public function send(ContactFormRequest $request)
    {
        $contact = $request->all();

        // メール送信
        $fromAddress = env('MAIL_FROM_ADDRESS');
        Mail::to($fromAddress)->send(new ContactSendmail($contact));
    
        // セッションのデータをクリア
        $request->session()->regenerateToken();  // CSRFトークン再生成
        Session::forget('contactData');
    
        // 完了画面を表示（送信後にGETメソッドで遷移）
        return Inertia::render('Contact/thanks', [
            'data' => $contact // 送信したデータを渡す
        ]); 
    }
}