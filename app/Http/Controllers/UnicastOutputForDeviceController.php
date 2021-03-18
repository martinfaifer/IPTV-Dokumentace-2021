<?php

namespace App\Http\Controllers;

use App\Models\H264;
use App\Models\H265;
use App\Models\StreamerAndPortBound;
use App\Models\UnicastChunkStoreId;
use App\Models\UnicastOutputForDevice;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Str;

class UnicastOutputForDeviceController extends Controller
{

    public function index()
    {
        return UnicastOutputForDevice::all();
    }

    public function show(Request $request)
    {
        if ($request->type === "h264") {
            if (!$h264 = H264::where('channelId', $request->channelId)->first()) {
                return [
                    'status' => "empty"
                ];
            }
            $data = UnicastOutputForDevice::where('h264Id', $h264->id)->first();
            return [
                'status' => "success",
                'data' => json_decode($data->output)
            ];
        }

        if ($request->type === "h265") {
            if (!$h265 = H265::where('channelId', $request->channelId)->first()) {
                return [
                    'status' => "empty"
                ];
            }
            if (!UnicastOutputForDevice::where('h265Id', $h265->id)->first()) {
                return [
                    'status' => "empty"
                ];
            }
            $data = UnicastOutputForDevice::where('h265Id', $h265->id)->first();

            return [
                'status' => "success",
                'data' => json_decode($data->output, true)
            ];
        }
    }

    public static function check_if_exest_before_generate(Request $request): void
    {
        // vyhledání zda existuje h264 nebo h265 záznam
        if (H264::where('channelId', $request->channelId)->first()) {
            // generování h264
            self::generate_h264($request);
        }

        if (H265::where('channelId', $request->channelId)->first()) {
            // generování h265
            self::generate_h265($request);
        }
    }

    public static function generate_h264(Request $request): void
    {

        $fillableData = array();

        $chunkStoreId = UnicastChunkStoreId::where('channelId', $request->channelId)->first()->chunkStoreId;

        if (!$h264 = H264::where('channelId', $request->channelId)->first()) {
            exit();
        }

        foreach (StreamerAndPortBound::get() as $scriptData) {
            if (!Str::contains($scriptData->stream_port->port_output, 'h265')) {
                $fillableData[uniqid()] = '<strong>' . $scriptData->stream_port->port_desc . '</strong> ' . 'http://' . $scriptData->streamer->streamer_ip . ':' . $scriptData->stream_port->port_nuber . '/' . $chunkStoreId . '-' . $scriptData->stream_port->port_output;
            }
        }


        if ($update = UnicastOutputForDevice::where('h264Id', $h264->id)->first()) {
            // update
            $update->update([
                'output' => json_encode($fillableData, true)
            ]);
        } else {
            // vytvorení nového listu
            UnicastOutputForDevice::create(
                [
                    'h264Id' => $h264->id,
                    'output' => json_encode($fillableData, true)
                ]
            );
        }
    }


    public static function generate_h265(Request $request): void
    {
        if (!StreamerAndPortBound::first()) {
            exit();
        }

        $fillableData = array();

        $chunkStoreId = UnicastChunkStoreId::where('channelId', $request->channelId)->first()->chunkStoreId;

        if (!$h265 = H265::where('channelId', $request->channelId)->first()) {
            exit();
        }

        foreach (StreamerAndPortBound::get() as $scriptData) {
            if (Str::contains($scriptData->stream_port->port_output, 'h265')) {
                // array_push($fillableData, 'http://' . $scriptData->streamer->streamer_ip . ':' . $scriptData->stream_port->port_nuber . '/' . $chunkStoreId . '-' . $scriptData->stream_port->port_output);
                $fillableData[uniqid()] = '<strong>' . $scriptData->stream_port->port_desc . '</strong> ' . 'http://' . $scriptData->streamer->streamer_ip . ':' . $scriptData->stream_port->port_nuber . '/' . $chunkStoreId . '-' . $scriptData->stream_port->port_output;
            }
        }


        if ($update = UnicastOutputForDevice::where('h265Id', $h265->id)->first()) {
            // update
            $update->update([
                'output' => json_encode($fillableData, true)
            ]);
        } else {
            // vytvorení nového listu
            UnicastOutputForDevice::create(
                [
                    'h265Id' => $h265->id,
                    'output' => json_encode($fillableData, true)
                ]
            );
        }
    }


    public static function generate_script_h264($chunkStoreId, $h264Id = null)
    {
        if (!StreamerAndPortBound::first()) {
            return [];
        }

        $fillableData = array();

        // $data = UnicastOutputForDevice::where('h264Id', $h264Id)->first();

        foreach (StreamerAndPortBound::get() as $scriptData) {

            if (!Str::contains($scriptData->stream_port->port_output, 'h265')) {
                // array_push($fillableData, 'http://' . $scriptData->streamer->streamer_ip . ':' . $scriptData->stream_port->port_nuber . '/' . $chunkStoreId . '-' . $scriptData->stream_port->port_output);
                $fillableData[uniqid()] = '<strong>' . $scriptData->stream_port->port_desc . '</strong> ' . 'http://' . $scriptData->streamer->streamer_ip . ':' . $scriptData->stream_port->port_nuber . '/' . $chunkStoreId . '-' . $scriptData->stream_port->port_output;
            }
        }


        if ($update = UnicastOutputForDevice::where('h264Id', $h264Id)->first()) {
            // update
            $update->update([
                'output' => json_encode($fillableData)
            ]);
        } else {
            UnicastOutputForDevice::create(
                [
                    'h264Id' => $h264Id,
                    'output' => json_encode($fillableData)
                ]
            );
        }
    }


    public static function generate_script_h265($chunkStoreId, $h265Id = null)
    {
        if (!StreamerAndPortBound::first()) {
            return [];
        }

        $fillableData = array();

        // $data = UnicastOutputForDevice::where('h264Id', $h264Id)->first();

        foreach (StreamerAndPortBound::get() as $scriptData) {

            if (Str::contains($scriptData->stream_port->port_output, 'h265')) {
                // array_push($fillableData, 'http://' . $scriptData->streamer->streamer_ip . ':' . $scriptData->stream_port->port_nuber . '/' . $chunkStoreId . '-' . $scriptData->stream_port->port_output);
                $fillableData[uniqid()] = '<strong>' . $scriptData->stream_port->port_desc . '</strong> ' . 'http://' . $scriptData->streamer->streamer_ip . ':' . $scriptData->stream_port->port_nuber . '/' . $chunkStoreId . '-' . $scriptData->stream_port->port_output;
            }
        }


        if ($update = UnicastOutputForDevice::where('h265Id', $h265Id)->first()) {
            // update
            $update->update([
                'output' => json_encode($fillableData)
            ]);
        } else {
            UnicastOutputForDevice::create(
                [
                    'h264Id' => $h265Id,
                    'output' => json_encode($fillableData)
                ]
            );
        }
    }



    public static function collect()
    {
        foreach (UnicastChunkStoreId::all() as $chunkStoreId) {
            // $chunkStoreId->chunkStoreId;
            if ($h264 = H264::where('channelId', $chunkStoreId->channelId)->first()) {
                self::generate_script_h264($chunkStoreId->chunkStoreId, $h264->id);
            }

            unset($h264);


            if ($h265 = H265::where('channelId', $chunkStoreId->channelId)->first()) {
                self::generate_script_h265($chunkStoreId->chunkStoreId, $h265->id);
            }

            unset($h265);
        }
    }

    public function run_command()
    {
        try {
            Artisan::call('command:convert');
            return NotificationController::notify("success", "success", "Vygenerováno");
        } catch (\Throwable $th) {
            return NotificationController::notify();
        }
    }
}
