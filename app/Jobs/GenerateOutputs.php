<?php

namespace App\Jobs;

use App\Http\Controllers\UnicastOutputForDeviceController;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class GenerateOutputs implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;


    protected $chunk_store_id;
    protected $h264_id;
    protected $h265_id;

    /**
     * Undocumented function
     *
     * @param [type] $chunk_store_id
     * @param [type] $h264_id
     * @param [type] $h265_id
     */
    public function __construct($chunk_store_id, $h264_id, $h265_id)
    {
        $this->chunk_store_id = $chunk_store_id;
        $this->h264_id = $h264_id;
        $this->h265_id = $h265_id;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        if (!is_null($this->h264_id)) {
            UnicastOutputForDeviceController::generate_script_h264($this->chunk_store_id, $this->h264_id);
        }

        if (!is_null($this->h265_id)) {
            UnicastOutputForDeviceController::generate_script_h265($this->chunk_store_id, $this->h265_id);
        }
    }
}
