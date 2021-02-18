<?php

namespace App\Http\Controllers;

use App\Jobs\SendRebootStreamNotification;
use App\Models\Channel;
use App\Models\ChannelsToTranscoder;
use App\Models\ChannelToDohled;
use App\Models\CrashedChannels;
use App\Models\Device;
use App\Models\H264;
use App\Models\H265;
use App\Models\LinuxPath;
use App\Models\Multicast;
use App\Models\ParedTag;

class CrashedChannelsController extends Controller
{
    public static function check_streams_status(): void
    {
        // vyhledání zda existuje vazba na dohled
        if (ChannelToDohled::first()) {

            foreach (ChannelToDohled::all() as $channelToCheck) {

                // $channelToCheck->dohledId
                $dohledDataAboutStream = ApiController::return_information_about_channel($channelToCheck->dohledId);

                // rozebrání informací o streamu
                if ($dohledDataAboutStream["status"] === 'success') {

                    // overení, zda existuje hodnota u klice streamStatus success
                    if ($dohledDataAboutStream['streamData']['streamStatus'] != 'success') {

                        // stream nejspise je v nejaké chybě, ulozí se stav

                        // overení zda se jedná o multicast, h264, h265
                        $data = self::get_column_and_data($channelToCheck);

                        // overení zda jiz stream není zalozen v tabulce
                        if ($crashedStream = CrashedChannels::where($data["column"], $data["streamId"])->first()) {
                            // vyhledání dat pro reboot a reboot 
                            self::try_to_reboot($data["column"], $data["streamId"], $crashedStream->id);
                        } else {

                            // neexistuje => zalození
                            CrashedChannels::create(
                                [
                                    $data['column'] => $data["streamId"]
                                ]
                            );
                        }
                    }
                } else {
                    // stream je v poradku, provede se kontrola, zda jiz stream neexistuje v tabulce a pripadne se odebere

                    $data = self::get_column_and_data($channelToCheck);

                    if ($crashedStream = CrashedChannels::where($data["column"], $data["streamId"])->first()) {
                        $crashedStream->delete();
                    }
                }
            }
        }
    }


    public static function get_column_and_data($dataToCheck)
    {
        if (!is_null($dataToCheck->channelId)) {
            return [
                "column" => "multicastId",
                "streamId" => $dataToCheck->channelId
            ];
        }

        if (!is_null($dataToCheck->H264Id)) {
            return [
                "column" => "h264",
                "streamId" => $dataToCheck->H264Id
            ];
        }

        if (!is_null($dataToCheck->H265Id)) {
            return [
                "column" => "h265",
                "streamId" => $dataToCheck->H265Id
            ];
        }
    }

    /**
     * Undocumented function
     *
     * @param string $streamtype (hodnoty multicastId, h264, h265)
     * @param string $streamId 
     * @param string $tableId id z tabulky crashed_streams
     * @return void
     */
    public static function try_to_reboot(string $streamtype, string $streamId, string $tableId): void
    {
        if (!is_null($crashedData = CrashedChannels::find($tableId)->reboot_two)) {
            // send mail s informací, že se nepoadrilo restartovat kanál

            // update záznamu
            $crashedData->update(
                [
                    'sended_email_alert' => "yes"
                ]
            );
            die();
        }

        // vyhledání zarizení na které je stream napojen
        switch ($streamtype) {
            case 'multicastId':
                $device = Device::where('id', Multicast::where('channelId', $streamId)->where('isBackup', null)->first()->deviceId)->first();
                $streamName = Channel::find($streamId)->nazev;
                break;
            case 'h264':
                $device = Device::where('id', H264::find($streamId)->deviceId)->first();
                // vyhledání id streamu na transcoderu
                $streamIdOnRemoteDevice = ChannelsToTranscoder::where('H264Id', $streamId)->first();
                $streamName = Channel::find(
                    H264::find($streamId)->channelId
                )->nazev;
                break;
            case 'h265':
                $device = Device::where('id', H265::find($streamId)->deviceId)->first();
                // vyhledání id streamu na transcoderu
                $streamIdOnRemoteDevice = ChannelsToTranscoder::where('H265Id', $streamId)->first();

                $streamName = Channel::find(
                    H265::find($streamId)->channelId
                )->nazev;
                break;

            default:
                $device = null;
                break;
        }

        if (!is_null($device)) {

            // zjistení zda zařízení umí komunikovat po API , dle stitku Device API (tagId = 3) nebo device SSH (tagId = 7)
            if ($tagInformation = ParedTag::where('deviceId', $device->id)->where('tagId', "3")->orWhere('tagId', "7")->first()) {
                // zařízení má na sobe stitek

                // pokud zarizeni umí restart po api => pokusí se o reboot
                if ($tagInformation->tagId === '3') {

                    // overení, zda existuje vazba na transcoder
                    if (isset($streamIdOnRemoteDevice)) {

                        // pokus o restart
                        try {
                            // resi se komunikace po API
                            $apiResponse = ApiController::reboot_stream($streamIdOnRemoteDevice->transcoderId);

                            // pole status , msg 
                            // status => success || error 
                            if ($apiResponse["status"] === 'success') {
                                // restart probehl , overení zda je jiz hodnota restart_one jina nez null
                                if (is_null($crashedData->reboot_one)) {
                                    // update reboot_one
                                    $crashedData->update([
                                        'reboot_one' => "yes"
                                    ]);
                                } else {
                                    // update reboot_two
                                    $crashedData->update([
                                        'reboot_two' => "yes"
                                    ]);
                                }
                            } else {
                                // vsechno selhalo
                                $crashedData->update([
                                    'reboot_one' => "yes",
                                    'reboot_two' => "yes",
                                ]);

                                dispatch(new SendRebootStreamNotification(
                                    // název streamu
                                    $streamName,
                                    // status
                                    $apiResponse["status"]
                                ));

                                LogController::store(
                                    "/controller/CrashedChannelsController",
                                    $apiResponse["msg"],
                                    $apiResponse["error"]
                                );
                            }
                        } catch (\Throwable $th) {
                            //neco selhalo, posle se do logu ( zatím neexistuje )
                            LogController::store(
                                "/controller/CrashedChannelsController",
                                $th,
                                "500"
                            );
                        }
                    }
                } else {
                    // komunikace po ssh, tag "7"

                    // device->category
                    if ($linuxPath = LinuxPath::where('channelId', $streamId)->first()) {
                        if (!is_null($device->login_user) && !is_null($device->login_password)) {
                            SshController::connect_and_run_command($device->ip, $device->login_user, $device->login_password, $linuxPath->path);

                            // overení zda jiz neprobehl restart
                            $crashedData->update(
                                [
                                    'reboot_one' => "yes",
                                ]
                            );
                        }
                    }
                }
            }
        }
    }
}
