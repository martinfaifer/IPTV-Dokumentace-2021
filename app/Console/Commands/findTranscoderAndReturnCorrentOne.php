<?php

namespace App\Console\Commands;

use App\Http\Controllers\ChannelsToTranscoderController;
use Illuminate\Console\Command;

class findTranscoderAndReturnCorrentOne extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'unicast:findTranscoderAndCheckBound';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Vyhledání transcoderu a kontrola, zda souhlasí s vazbou v dokumentaci, pripadne nesrovnalosti automaticky opraví';

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
        ChannelsToTranscoderController::find_transcoder();
    }
}
