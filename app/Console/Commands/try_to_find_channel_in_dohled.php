<?php

namespace App\Console\Commands;

use App\Http\Controllers\ChannelToDohledController;
use Illuminate\Console\Command;

class try_to_find_channel_in_dohled extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'dohled:try_find';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Vyhledání kanálu v dohledu a připárování id';

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
        ChannelToDohledController::try_to_find_channel_in_dohled();
    }
}
