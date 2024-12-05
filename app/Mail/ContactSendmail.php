<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Queue\SerializesModels;

class ContactSendmail extends Mailable
{
    use Queueable, SerializesModels;

    private $inquiryType;
    private $companyType;
    private $companyName;
    private $email;
    private $name;
    private $message;

    /**
     * Create a new message instance.
     */
    public function __construct($contact)
    {
        $this->inquiryType = $contact['inquiryType'];
        $this->companyType = $contact['companyType'];
        $this->companyName = $contact['companyName'];
        $this->email = $contact['email'];
        $this->name = $contact['name'];
        $this->message = $contact['message'];
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            from: new Address(env('MAIL_FROM_ADDRESS'), env('MAIL_FROM_NAME', 'Default Name')),
            subject: 'お問い合わせを受け付けました。 | BORDERLESSS'
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        $messageBody = <<<EOT
        {$this->companyName} {$this->name} 様
    
        この度はお問い合わせいただきありがとうございます。
    
        お問合せいただいた内容は下記のとおりです。
        【お問い合わせ種類】：{$this->inquiryType}
        【個人・法人】：{$this->companyType}
        【会社名】：{$this->companyName}
        【メールアドレス】：{$this->email}
        【お名前】：{$this->name}
        【メッセージ】：{$this->message}
    
        確認次第、ご連絡させていただきます。
        なお、ツール等の営業に関しましては申し訳ございません。返信は控えさせていただきますのでご了承ください。
    
    
        --------------------
        BORDERLESSS
        担当 佐藤
        --------------------
        EOT;
    
        return new Content(
            // ここで直接テキストのコンテンツを返す
            text: $messageBody, // プレーンテキストメールの場合
            // もしくはHTMLコンテンツを返すことも可能
            // html: $messageBody
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
