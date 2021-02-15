<?php

namespace App\Jobs;

use App\Http\Controllers\SendNotificationController;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;


class SendFileNotification implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;


    protected $mail;
    protected $text;


    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(string $mail, $text)
    {
        $this->mail = $mail;
        $this->text = $text;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        SendNotificationController::send_file_notification(
            $this->mail,
            $this->text,
        );
    }
}
