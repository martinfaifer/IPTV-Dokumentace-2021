<?php

namespace App\Jobs;

use App\Http\Controllers\SendNotificationController;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class SendRebootStreamNotification implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    protected $stream;
    protected $status;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(string $stream, string $status)
    {
        $this->stream = $stream;
        $this->status = $status;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        SendNotificationController::notifyRebootStream(
            $this->stream,
            $this->status
        );
    }
}
