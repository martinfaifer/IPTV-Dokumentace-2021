<?php

namespace App\Http\Controllers;

use App\Models\H264;
use App\Models\H265;
use App\Models\StreamerAndPortBound;
use App\Models\UnicastChunkStoreId;
use App\Models\UnicastOutputForDevice;
use Illuminate\Http\Request;

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
            $data = UnicastOutputForDevice::where('h265Id', $h265->id)->first();
            return [
                'status' => "success",
                'data' => json_decode($data->output)
            ];
        }
    }


    public static function generate(Request $request)
    {
        if (!StreamerAndPortBound::where('used_for', '!=', null)->first()) {
            return [];
        }

        $fillableData = array();


        if (!$h264 = H264::where('channelId', $request->channelId)->first()) {
            return [
                'status' => "empty"
            ];
        }
        $data = UnicastOutputForDevice::where('h264Id', $h264->id)->first();

        foreach (StreamerAndPortBound::where('used_for', '!=', null)->get() as $scriptData) {

            array_push($fillableData, 'http://' . $scriptData->streamer->streamer_ip . ':' . $scriptData->stream_port->port_nuber . '/' . $request->chunkStoreId . '-' . $scriptData->stream_port->port_output);
        }


        if ($update = UnicastOutputForDevice::where('h264Id', $h264->id)->first()) {
            // update
            $update->update([
                'output' => json_encode($fillableData)
            ]);
        } else {
            UnicastOutputForDevice::create(
                [
                    'h264Id' => $h264->id,
                    'output' => json_encode($fillableData)
                ]
            );
        }
    }


    public static function generate_script($chunkStoreId, $h264Id = null)
    {
        if (!StreamerAndPortBound::where('used_for', '!=', null)->first()) {
            return [];
        }

        $fillableData = array();

        // $data = UnicastOutputForDevice::where('h264Id', $h264Id)->first();

        foreach (StreamerAndPortBound::where('used_for', '!=', null)->get() as $scriptData) {

            array_push($fillableData, 'http://' . $scriptData->streamer->streamer_ip . ':' . $scriptData->stream_port->port_nuber . '/' . $chunkStoreId . '-' . $scriptData->stream_port->port_output);
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



    public static function collect()
    {
        foreach (UnicastChunkStoreId::all() as $chunkStoreId) {
            // $chunkStoreId->chunkStoreId;
            if ($h264 = H264::where('channelId', $chunkStoreId->channelId)->first()) {
                self::generate_script($chunkStoreId->chunkStoreId, $h264->id);
            }

            unset($h264);
        }
    }
}
