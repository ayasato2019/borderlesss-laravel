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
    public function confirm(Request $request)
    {
        // 確認ページを表示
        $contact = $request->all();
        return Inertia::render('Contact/confirm', [
            'data' => $contact
        ]);
    }

    // 送信処理
    public function send(Request $request)
    {
        $contact = $request->all();

        // メール送信
        $fromAddress = env('MAIL_FROM_ADDRESS');
        Mail::to($fromAddress)->send(new ContactSendmail($contact));
    
        // セッションのデータを渡す
        $request->session()->regenerateToken();
        $request->session()->forget('contact_form_data');
    
        // 完了画面を表示
        return Inertia::render('Contact/thanks', [
            'data' => $contact
        ]);
    }
}
