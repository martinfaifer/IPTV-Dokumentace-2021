<?php

namespace App\Console\Commands;

use App\Http\Controllers\EventController;
use Illuminate\Console\Command;

class DeletePassedEvents extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'events:delete';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Odebrání již proběhlích událostí';

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
        EventController::delete_passed_events();
    }
}
