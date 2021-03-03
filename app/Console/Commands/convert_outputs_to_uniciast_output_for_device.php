<?php

namespace App\Console\Commands;

use App\Http\Controllers\UnicastOutputForDeviceController;
use Illuminate\Console\Command;

class convert_outputs_to_uniciast_output_for_device extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:convert';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

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
        UnicastOutputForDeviceController::collect();
    }
}
