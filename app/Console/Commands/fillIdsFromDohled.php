<?php

namespace App\Console\Commands;

use App\Http\Controllers\ApiController;
use Illuminate\Console\Command;

class fillIdsFromDohled extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'channels:fillIdFromDohled';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Vyhledání kanálů na dohledu a následně vyplnění vazby zde v docu';

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
        ApiController::fill_doku_from_dohled();
    }
}
