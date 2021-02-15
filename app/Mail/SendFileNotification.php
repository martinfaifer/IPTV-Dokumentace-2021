<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SendFileNotification extends Mailable
{
    use Queueable, SerializesModels;

    public $mail;
    public $text;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($mail, $text)
    {
        $this->mail = $mail;
        $this->text = $text;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('sendFileNotification')
            ->subject("Byl nahrán nový soubor");
    }
}
