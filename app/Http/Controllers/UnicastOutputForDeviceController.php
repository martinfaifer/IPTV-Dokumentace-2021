<?php

namespace App\Http\Controllers;

use App\Jobs\GenerateOutputs;
use App\Models\H264;
use App\Models\H265;
use App\Models\StreamerAndPortBound;
use App\Models\UnicastChunkStoreId;
use App\Models\UnicastOutputForDevice;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Str;
use Symfony\Polyfill\Intl\Idn\Info;
use App\Traits\NotificationTrait;

class UnicastOutputForDeviceController extends Controller
{
    use NotificationTrait;
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
            foreach (explode(",", $scriptData->stream_port->port_output) as $port_output) {
                if (!Str::contains($port_output, 'h265')) {
                    $fillableData[] = [
                        'id' => uniqid(),
                        'description' => $scriptData->stream_port->port_desc,
                        'uri' => 'http://' . $scriptData->streamer->streamer_ip . ':' . $scriptData->stream_port->port_nuber . '/' . $chunkStoreId . $port_output,
                        'ctypes_mobile' => CtypeController::find_ctypes_by_id($scriptData->ctypes_mobile, "all"),
                        'ctypes_stb' => CtypeController::find_ctypes_by_id($scriptData->ctypes_stb, "all"),
                        'ctypes_stb_h265' => CtypeController::find_ctypes_by_id($scriptData->ctypes_stb_h265, "all"),
                        'ctypes_screenshoter' => CtypeController::find_ctypes_by_id($scriptData->ctypes_screenshoter, "all"),
                        'ctypes_samsung_tv' => CtypeController::find_ctypes_by_id($scriptData->ctypes_samsung_tv, "all"),
                        'ctypes_android_tv' => CtypeController::find_ctypes_by_id($scriptData->ctypes_android_tv, "all"),
                        'ctypes_pc' => CtypeController::find_ctypes_by_id($scriptData->ctypes_pc, "all"),
                        'ottstring' => StreamerAndPortBoundController::check_ott($scriptData->ottstring)
                    ];
                }
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
            foreach (explode(",", $scriptData->stream_port->port_output) as $port_output) {
                if (Str::contains($port_output, 'h265')) {

                    if (StreamerAndPortBoundController::check_ott($scriptData->ottstring) === true) {
                        $port_output = str_replace(
                            array("stb"),
                            array("stbott"),
                            $port_output
                        );
                    }

                    $fillableData[] = [
                        'id' => uniqid(),
                        'description' => $scriptData->stream_port->port_desc,
                        'uri' => 'http://' . $scriptData->streamer->streamer_ip . ':' . $scriptData->stream_port->port_nuber . '/' . $chunkStoreId . $port_output,
                        'ctypes_mobile' => CtypeController::find_ctypes_by_id($scriptData->ctypes_mobile, "all"),
                        'ctypes_stb' => CtypeController::find_ctypes_by_id($scriptData->ctypes_stb, "all"),
                        'ctypes_stb_h265' => CtypeController::find_ctypes_by_id($scriptData->ctypes_stb_h265, "all"),
                        'ctypes_screenshoter' => CtypeController::find_ctypes_by_id($scriptData->ctypes_screenshoter, "all"),
                        'ctypes_samsung_tv' => CtypeController::find_ctypes_by_id($scriptData->ctypes_samsung_tv, "all"),
                        'ctypes_android_tv' => CtypeController::find_ctypes_by_id($scriptData->ctypes_android_tv, "all"),
                        'ctypes_pc' => CtypeController::find_ctypes_by_id($scriptData->ctypes_pc, "all"),
                        'ottstring' => StreamerAndPortBoundController::check_ott($scriptData->ottstring)
                    ];
                }
            }
        }


        if ($update = UnicastOutputForDevice::where('h265Id', $h265->id)->first()) {

            $update->update([
                'output' => json_encode($fillableData, true)
            ]);
        } else {

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
        // description , uri, device, ctype_id, kodek, resolution. bitrate
        foreach (StreamerAndPortBound::get() as $scriptData) {
            foreach (explode(",", $scriptData->stream_port->port_output) as $port_output) {
                if (!Str::contains($port_output, 'h265')) {
                    $fillableData[] = [
                        'id' => uniqid(),
                        'description' => $scriptData->stream_port->port_desc,
                        'uri' => 'http://' . $scriptData->streamer->streamer_ip . ':' . $scriptData->stream_port->port_nuber . '/' . $chunkStoreId . $port_output,
                        'ctypes_mobile' => CtypeController::find_ctypes_by_id($scriptData->ctypes_mobile, "all"),
                        'ctypes_stb' => CtypeController::find_ctypes_by_id($scriptData->ctypes_stb, "all"),
                        'ctypes_stb_h265' => CtypeController::find_ctypes_by_id($scriptData->ctypes_stb_h265, "all"),
                        'ctypes_screenshoter' => CtypeController::find_ctypes_by_id($scriptData->ctypes_screenshoter, "all"),
                        'ctypes_samsung_tv' => CtypeController::find_ctypes_by_id($scriptData->ctypes_samsung_tv, "all"),
                        'ctypes_android_tv' => CtypeController::find_ctypes_by_id($scriptData->ctypes_android_tv, "all"),
                        'ctypes_pc' => CtypeController::find_ctypes_by_id($scriptData->ctypes_pc, "all"),
                        'ottstring' => StreamerAndPortBoundController::check_ott($scriptData->ottstring)
                    ];
                }
            }
        }

        if ($update = UnicastOutputForDevice::where('h264Id', $h264Id)->first()) {
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

        foreach (StreamerAndPortBound::get() as $scriptData) {
            foreach (explode(",", $scriptData->stream_port->port_output) as $port_output) {
                if (Str::contains($port_output, 'h265')) {
                    $fillableData[] = [
                        'id' => uniqid(),
                        'description' => $scriptData->stream_port->port_desc,
                        'uri' => 'http://' . $scriptData->streamer->streamer_ip . ':' . $scriptData->stream_port->port_nuber . '/' . $chunkStoreId . $port_output,
                        'ctypes_mobile' => CtypeController::find_ctypes_by_id($scriptData->ctypes_mobile, "all"),
                        'ctypes_stb' => CtypeController::find_ctypes_by_id($scriptData->ctypes_stb, "all"),
                        'ctypes_stb_h265' => CtypeController::find_ctypes_by_id($scriptData->ctypes_stb_h265, "all"),
                        'ctypes_screenshoter' => CtypeController::find_ctypes_by_id($scriptData->ctypes_screenshoter, "all"),
                        'ctypes_samsung_tv' => CtypeController::find_ctypes_by_id($scriptData->ctypes_samsung_tv, "all"),
                        'ctypes_android_tv' => CtypeController::find_ctypes_by_id($scriptData->ctypes_android_tv, "all"),
                        'ctypes_pc' => CtypeController::find_ctypes_by_id($scriptData->ctypes_pc, "all"),
                        'ottstring' => StreamerAndPortBoundController::check_ott($scriptData->ottstring)
                    ];
                }
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
                    'h265Id' => $h265Id,
                    'output' => json_encode($fillableData)
                ]
            );
        }
    }



    public static function generate(): void
    {
        foreach (UnicastChunkStoreId::all() as $chunkStoreId) {
            self::check_if_exist_h264_for_generating_script($chunkStoreId);
            self::check_if_exist_h265_for_generating_script($chunkStoreId);
        }

        BroadcastController::broadcast_notification_every_body_include_my_self("Generování dokončeno!");
    }


    protected static function check_if_exist_h264_for_generating_script($chunkStoreId): void
    {
        if ($h265 = H265::where('channelId', $chunkStoreId->channelId)->first()) {
            GenerateOutputs::dispatch($chunkStoreId->chunkStoreId, null, $h265->id);
            unset($h265);
        }
    }

    protected static function check_if_exist_h265_for_generating_script($chunkStoreId): void
    {
        if ($h264 = H264::where('channelId', $chunkStoreId->channelId)->first()) {
            GenerateOutputs::dispatch($chunkStoreId->chunkStoreId, $h264->id, null);
            unset($h264);
        }
    }

    public function run_command()
    {
        try {
            UnicastOutputForDevice::query()->delete();
            Artisan::call('command:generate');
            BroadcastController::broadcast_notification_every_body_include_my_self("Spuštěno generování výstupů!");
        } catch (\Throwable $th) {
            return $this->frontend_notification();
        }
    }
}
