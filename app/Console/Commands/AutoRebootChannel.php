<?php

namespace App\Console\Commands;

use App\Http\Controllers\ChannelAutoRebootController;
use Illuminate\Console\Command;

class AutoRebootChannel extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'channel:autoReboot';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Automatický restart kanálu ve 04:00';

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
        ChannelAutoRebootController::reboot_channels();
    }
}
