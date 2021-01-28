<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SendRebootStreamNotification extends Mailable
{
    use Queueable, SerializesModels;

    public $streamName;
    public $status;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($streamName, $status)
    {
        $this->streamName = $streamName;
        $this->status = $status;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('sendRebootNotification')
            ->subject($this->streamName . " - " . $this->status);
    }
}
