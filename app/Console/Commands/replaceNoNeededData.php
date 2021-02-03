<?php

namespace App\Console\Commands;

use App\Models\UnicastKvalitaChannelOutput;
use Illuminate\Console\Command;

class replaceNoNeededData extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'unicast_channels:replace_no_needed_data';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Odstranění z Unicastvcýh kvalit zbytecnou informaci o url streameru';

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
        foreach (UnicastKvalitaChannelOutput::all() as $output) {


            $outputData = str_replace("http://217.75.209.82:10224/udp/", "", $output->output);
            // $outputData = str_replace("udp://", "", $output->output);

            // updtae zaznamu
            $output->update(
                [
                    'output' => $outputData
                ]
            );
        }
    }
}
