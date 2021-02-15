<?php

namespace App\Http\Controllers;

use App\Models\ChannelAutoReboot;
use App\Models\ChannelsToTranscoder;
use App\Models\Device;
use App\Models\H264;
use App\Models\H265;
use App\Models\ParedTag;
use Illuminate\Http\Request;

class ChannelAutoRebootController extends Controller
{


    public function index(): array
    {
        return (ChannelAutoReboot::fist())
            ? ChannelAutoReboot::all()->toArray()
            : [];
    }



    public function show(Request $request): array
    {
        switch ($request->type) {
            case 'h264':
                return (ChannelAutoReboot::where('H264Id',  $request->id)->fist())
                    ? ChannelAutoReboot::where('H264Id',  $request->id)->get()->toArray()
                    : [];
                break;

            case 'h265':
                return (ChannelAutoReboot::where('H265Id',  $request->id)->fist())
                    ? ChannelAutoReboot::where('H265Id',  $request->id)->get()->toArray()
                    : [];
                break;

            default:
                return [];
                break;
        }
    }


    public static function store(Request $request): array
    {
        switch ($request->type) {
            case 'h264':

                if (self::check_if_channel_can_be_rebooted($request->id, $request->type)) {
                    if (!ChannelAutoReboot::where('H264Id', $request->id)->first()) {
                        ChannelAutoReboot::create(
                            [
                                'H264Id' => $request->id
                            ]
                        );
                        return NotificationController::notify("success", "success", "Událost uložena");
                    }
                    return NotificationController::notify("error", "error", "Kanál má již nastaven automatický restart");
                }
                return NotificationController::notify("error", "error", "Zařízení nepodporuje automatický restart");
                break;

            case 'h265':

                if (self::check_if_channel_can_be_rebooted($request->id, $request->type)) {
                    if (!ChannelAutoReboot::where('H265Id', $request->id)->first()) {
                        ChannelAutoReboot::create(
                            [
                                'H265Id' => $request->id
                            ]
                        );

                        return NotificationController::notify("success", "success", "Událost uložena");
                    }

                    return NotificationController::notify("error", "error", "Kanál má již nastaven automatický restart");
                }
                return NotificationController::notify("error", "error", "Zařízení nepodporuje automatický restart");
                break;

            default:
                return NotificationController::notify("error", "error", "Kanál nepodporuje automatcký restart");
                break;
        }
    }


    public static function destroy(string $type, $id): array
    {
        switch ($type) {
            case 'h264':
                if ($toDeystroy = ChannelAutoReboot::where('H264Id', $id)->first()) {
                    $toDeystroy->delete();
                    return NotificationController::notify("success", "success", "Událost smazana");
                }
                break;

            case 'h265':
                if ($toDeystroy = ChannelAutoReboot::where('H265Id', $id)->first()) {
                    $toDeystroy->delete();

                    return NotificationController::notify("success", "success", "Událost smazana");
                }

                break;

            default:
                return NotificationController::notify();
                break;
        }
    }


    public static function check_if_channel_can_be_rebooted($channelId, $type): bool
    {
        // vyhledání zarizeni
        switch ($type) {
            case 'h264':
                if (ParedTag::where(
                    'deviceId',
                    Device::find(
                        H264::where(
                            'channelId',
                            $channelId
                        )->first()->deviceId
                    )->id
                )
                    ->where(
                        'tagId',
                        "3"
                    )->first()
                ) {

                    return true;
                } else {
                    return false;
                }

                break;

            case 'h265':
                if (ParedTag::where(
                    'deviceId',
                    Device::find(
                        H265::where(
                            'channelId',
                            $channelId
                        )->first()->deviceId
                    )->id
                )
                    ->where(
                        'tagId',
                        "3"
                    )->first()
                ) {

                    return true;
                } else {
                    return false;
                }
                break;

            default:
                return false;
                break;
        }
    }



    public static function reboot_channels()
    {
        if (ChannelAutoReboot::first()) {
            if (ChannelAutoReboot::where('H264Id', "!=", null)->first()) {
                foreach (ChannelAutoReboot::where('H264Id', "!=", null)->get(['H264Id']) as $h264) {
                    // vyhledání na transcoderu
                    if ($channelId = ChannelsToTranscoder::where('H264Id', $h264['H264Id'])->first()) {
                        // restart pomoci api
                        ApiController::reboot_stream($channelId->id);
                        unset($channelId);
                    }
                }
            }

            if (ChannelAutoReboot::where('H265Id', "!=", null)->first()) {
                foreach (ChannelAutoReboot::where('H264Id', "!=", null)->get(['H265Id']) as $h265) {
                    // vyhledání na transcoderu
                    if ($channelId = ChannelsToTranscoder::where('H265Id', $h265['H265Id'])->first()) {
                        // restart pomoci api
                        ApiController::reboot_stream($channelId)->id;
                        unset($channelId);
                    }
                }
            }
        }
    }
}
