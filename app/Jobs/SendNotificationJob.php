<?php

namespace App\Jobs;

use App\Http\Controllers\SendNotificationController;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class SendNotificationJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $user;
    protected $item;
    protected $type;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(string $user, string $item, string $type)
    {
        $this->user = $user;
        $this->item = $item;
        $this->type = $type;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        SendNotificationController::notify(
            $this->user,
            $this->item,
            $this->type
        );
    }
}
