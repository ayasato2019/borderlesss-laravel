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
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this
        ->to($this->email)
        ->from(env('MAIL_FROM_ADDRESS', 'default@example.com'), env('MAIL_FROM_NAME', 'Default Name'))
        ->subject('【自動送信】お問合せをつけつけました | BORDERLESSS')
        ->view('contact.mail')
        ->with([
            'inquiryType' => $this->inquiryType,
            'companyType' => $this->companyType,
            'companyName' => $this->companyName,
            'email' => $this->email,
            'name' => $this->name,
            'comment' => $this->message,
        ]);
    }
}
