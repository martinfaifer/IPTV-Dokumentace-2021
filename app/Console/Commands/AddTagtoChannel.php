<?php

namespace App\Console\Commands;

use App\Http\Controllers\ParedTagController;
use Illuminate\Console\Command;

class AddTagtoChannel extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'tag:autoFill';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Automaticke plnění stitku, jednorazová fn ';

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
        ParedTagController::add_tag_to_channel_if_is_in_dohled();
    }
}
