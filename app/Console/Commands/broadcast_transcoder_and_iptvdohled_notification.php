<?php

namespace App\Console\Commands;

use App\Http\Controllers\BroadcastController;
use Illuminate\Console\Command;

class broadcast_transcoder_and_iptvdohled_notification extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'broadcast:notify';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Broadcastovani notifikaci z externich aplikaci';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        BroadcastController::broadcast_alerts();
    }
}
