<?php

namespace App\Console\Commands;

use App\Http\Controllers\CrashedChannelsController;
use Illuminate\Console\Command;

class getStreamStatusesFromDohled extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'dohled:getStatuses_andTryToReboot';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Získání statusů streamů z dohledu, kdy se následně pokud streamy nebudou funknčí pokusí o restart';

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
        CrashedChannelsController::check_streams_status();
    }
}
