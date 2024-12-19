<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\ContactSendmail;
use Illuminate\Support\Facades\Mail;
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
        $contact = $request->validate([
            'inquiryType' => ['required', 'in:見積もり,ご相談,チーム参画依頼,その他'],
            'companyType' => ['required', 'in:個人,法人'],
            'companyName' => ['nullable', 'string', 'max:255'],
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email'],
            'message' => ['required', 'string', 'max:2000'],
        ]);

        return Inertia::render('Contact/confirm', [
            'data' => $contact
        ]);
    }

    // 送信処理
    public function send(Request $request)
    {
        $contact = $request->validate([
            'inquiryType' => ['required', 'in:見積もり,ご相談,チーム参画依頼,その他'],
            'companyType' => ['required', 'in:個人,法人'],
            'companyName' => ['nullable', 'string', 'max:255'],
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email'],
            'message' => ['required', 'string', 'max:2000'],
        ]);

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
