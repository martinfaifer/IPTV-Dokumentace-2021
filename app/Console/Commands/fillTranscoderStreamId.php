<?php

namespace App\Console\Commands;

use App\Http\Controllers\ChannelsToTranscoderController;
use Illuminate\Console\Command;

class fillTranscoderStreamId extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'transcoder:fillStreamId';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Vyhledaní na stramscoderu streamId a vytvoreni vazby';

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
        ChannelsToTranscoderController::try_to_find_channels_and_create_bind();
    }
}
