<?php

namespace App\Http\Controllers;

use App\Jobs\SendNotificationJob;
use App\Models\Channel;
use App\Models\Device;
use App\Models\H264;
use App\Models\Multicast;
use App\Models\MulticastSource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ChannelController extends Controller
{
    /**
     * fn pro zobrazení vsech kanálů
     *
     * @return array
     */
    public function get_channels(): array
    {
        if (!Channel::first()) {
            return [];
        }

        return Channel::get(['id', 'nazev', 'status', 'logo'])->toArray();
    }

    /**
     * fn pro získání názvu kanálů
     *
     * @param Request $request->channelId
     * @return string
     */
    public function get_channel_name(Request $request): string
    {
        if (!Channel::where('id', $request->channelId)->first()) {
            return "neexistuje";
        }

        return Channel::where('id', $request->channelId)->first()->nazev;
    }


    /**
     * Undocumented function
     *
     * @param Request $request -> channelId , param ( multiplexor, prijem, backup )
     * @return array
     */
    public static function check_channel(Request $request): array
    {
        // kontrola exiustence channelId
        if (!Channel::where('id', $request->channelId)->first()) {
            return [
                'status' => "error",
                'alert' => array(
                    'status' => "error",
                    'msg' => "Nepodařilo se nalézt kanál"
                )
            ];
        }

        return MulticastController::check_channel($request);
    }


    /**
     * fn pro výpis veškeých informací o kanálu jak v multicastu, h264 i h265 včetně veškerých zařízení
     *
     * @param Request $request->channelId
     * @return array
     */
    public function this_channel(Request $request): array
    {
        return [
            // string
            'name' => $this->get_channel_name($request),
            // pole id, zdroj
            'multicastZdroj' => MulticastSourceController::return_surce_id_zdroj_by_id_or_return_null(Multicast::where('channelId', $request->channelId)->first()->zdrojId ?? null),
            // string
            'multicast_ip' => Multicast::where('channelId', $request->channelId)->first()->multicast_ip ?? null,
            // vrací pole s interfaci o strukture id , interface
            'deviceInterfaceBelongsToChannel' => DeviceInterfaceController::return_interface_names_belongsToChannel(Multicast::where('channelId', $request->channelId)->first()->deviceInterface ?? null),
            // string
            'stb_ip' => Multicast::where('channelId', $request->channelId)->first()->stb_ip ?? null,
            // pole id, name
            'backup_multicastZdroj' => MulticastSourceController::return_surce_id_zdroj_by_id_or_return_null(Multicast::where('channelId', $request->channelId)->where('isBackup', "!=", null)->first()->zdrojId ?? null),
            // string
            'backup_multicast_ip' => Multicast::where('channelId', $request->channelId)->where('isBackup', "!=", null)->first()->multicast_ip ?? null,
            // vrací pole s interfaci o strukture id , interface
            'backup_deviceInterfaceBelongsToChannel' => DeviceInterfaceController::return_interface_names_belongsToChannel(Multicast::where('channelId', $request->channelId)->where('isBackup', "!=", null)->first()->deviceInterface ?? null),
            // pole id, name
            'multiplexor' => DeviceController::return_device_id_and_name_by_id(Multicast::where('channelId', $request->channelId)->first()->multiplexerId ?? null),
            // pole id, name
            'prijem' => DeviceController::return_device_id_and_name_by_id(Multicast::where('channelId', $request->channelId)->first()->deviceId ?? null),
            // pole pro následné zpracování ve vue
            'prijemId' => array(
                'id' => Multicast::where('channelId', $request->channelId)->first()->deviceId ?? null
            ),
            // pole id, name
            'backup_prijem' =>  DeviceController::return_device_id_and_name_by_id(Multicast::where('channelId', $request->channelId)->where('isBackup', "!=", null)->first()->deviceId ?? null),
        ];
    }

    public function return_multicast_informations(Request $request): array
    {
        if (!Channel::where('id', $request->channelId)->first()) {
            return [
                'status' => "empty"
            ];
        }

        return [
            'status' => "success",
            'data' => array(
                'name' => $this->get_channel_name($request),
                'multicastZdroj' => MulticastSourceController::return_surce_id_zdroj_by_id_or_return_null(Multicast::where('channelId', $request->channelId)->first()->zdrojId ?? null),
                'multicast_ip' => Multicast::where('channelId', $request->channelId)->first()->multicast_ip ?? null,
                'stb_ip' => Multicast::where('channelId', $request->channelId)->first()->stb_ip ?? null,
                'backup_multicastZdroj' => MulticastSourceController::return_surce_id_zdroj_by_id_or_return_null(Multicast::where('channelId', $request->channelId)->where('isBackup', "!=", null)->first()->zdrojId ?? null),
                'backup_multicast_ip' => Multicast::where('channelId', $request->channelId)->where('isBackup', "!=", null)->first()->multicast_ip ?? null
            )
        ];
    }

    /**
     * 
     * 
     * EDITACE 
     * 
     * 
     */

    /**
     * Editace multiplexoru
     *
     * @param Request $request channelId, deviceName
     * @return array
     */
    public static function edit_multiplexor(Request $request): array
    {
        if (!Multicast::where('channelId', $request->channelId)->where('isBackup', null)->first()) {
            return [
                'status' => "error",
                'alert' =>  array(
                    'status' => "warning",
                    'msg' => "Nastala neočekávaná chyba"
                )
            ];
        }


        if (is_null($request->deviceName) || empty($request->deviceName)) {
            return [
                'status' => "warning",
                'alert' =>  array(
                    'status' => "warning",
                    'msg' => "Zařízení musí být vyplněno"
                )
            ];
        } else {
            //  overení zda existuje device
            $deviceData = DeviceController::return_deviceId_by_name($request);
            if ($deviceData['status'] === 'error') {
                return [
                    'status' => "error",
                    'alert' =>  array(
                        'status' => "warning",
                        'msg' => "Nepodařilo se najít zařízení"
                    )
                ];
            }
        }

        return MulticastController::update_multiplexor($deviceData['deviceId'], $request->channelId);
    }

    /**
     * editace prijmu kanálu
     *
     * @param Request $request
     * @return array
     */
    public static function edit_prijem(Request $request): array
    {
        if (!Multicast::where('channelId', $request->channelId)->where('isBackup', null)->first()) {
            return [
                'status' => "error",
                'alert' =>  array(
                    'status' => "warning",
                    'msg' => "Nastala neočekávaná chyba"
                )
            ];
        }

        if (is_null($request->deviceName) || empty($request->deviceName)) {
            return [
                'status' => "warning",
                'alert' =>  array(
                    'status' => "warning",
                    'msg' => "Zařízení musí být vyplněno"
                )
            ];
        } else {
            //  overení zda existuje device
            $deviceData = DeviceController::return_deviceId_by_name($request);
            if ($deviceData['status'] === 'error') {
                return [
                    'status' => "error",
                    'alert' =>  array(
                        'status' => "warning",
                        'msg' => "Nepodařilo se najít zařízení"
                    )
                ];
            }
        }

        if (is_null($request->checkIfDeviceHasInterface)) {
            $channelToInterface = null;
        } else {
            $channelToInterface = $request->channelToInterface;
        }

        return MulticastController::update_prijem($deviceData['deviceId'], $request->channelId, $channelToInterface);
    }

    public static function edit_backup(Request $request): array
    {
        if (!Multicast::where('channelId', $request->channelId)->where('isBackup', "!=", null)->first()) {
            return [
                'status' => "error",
                'alert' =>  array(
                    'status' => "warning",
                    'msg' => "Nastala neočekávaná chyba"
                )
            ];
        }

        if (is_null($request->deviceName) || empty($request->deviceName)) {
            return [
                'status' => "warning",
                'alert' =>  array(
                    'status' => "warning",
                    'msg' => "Zařízení musí být vyplněno"
                )
            ];
        } else {
            //  overení zda existuje device
            $deviceData = DeviceController::return_deviceId_by_name($request);
            if ($deviceData['status'] === 'error') {
                return [
                    'status' => "error",
                    'alert' =>  array(
                        'status' => "warning",
                        'msg' => "Nepodařilo se najít zařízení"
                    )
                ];
            }
        }

        if (is_null($request->checkIfDeviceHasInterface)) {
            $channelToInterface = null;
        } else {
            $channelToInterface = $request->channelToInterface;
        }

        return MulticastController::update_backup($deviceData['deviceId'], $request->channelId, $channelToInterface);
    }


    public static function remove_multiplexor(Request $request): array
    {
        if (!Multicast::where('channelId', $request->channelId)->where('isBackup', null)->first()) {
            return [
                'status' => "error",
                'alert' =>  array(
                    'status' => "warning",
                    'msg' => "Nastala neočekávaná chyba"
                )
            ];
        }

        return MulticastController::remove_multiplexor($request);
    }


    public static function remove_prijem(Request $request): array
    {
        if (!Multicast::where('channelId', $request->channelId)->where('isBackup', null)->first()) {
            return [
                'status' => "error",
                'alert' =>  array(
                    'status' => "warning",
                    'msg' => "Nastala neočekávaná chyba"
                )
            ];
        }

        return MulticastController::remove_prijem($request);
    }


    public static function remove_backup(Request $request): array
    {
        if (!Multicast::where('channelId', $request->channelId)->where('isBackup', "!=", null)->first()) {
            return [
                'status' => "error",
                'alert' =>  array(
                    'status' => "warning",
                    'msg' => "Nastala neočekávaná chyba"
                )
            ];
        }

        return MulticastController::remove_backup($request);
    }


    /**
     * Undocumented function
     *
     * @param Request $request channelName, multicastZdroj , multicast_ip , stb_ip , backup_multicastZdroj , backup_multicast_ip
     * @return array
     */
    public static function create(Request $request): array
    {

        // overení zda neexistuje kanál se stejným názvem nebo neexistuji již stb_ip
        if (Channel::where('nazev', $request->channelName)->first() || Multicast::where('stb_ip', $request->stb_ip)->first()) {
            // exist 
            return [
                'status' => "warning",
                'alert' => array(
                    'status' => "warning",
                    'msg' => "Kanál s tímto názvem nebo STB IP již existuje"
                )
            ];
        }

        if (
            !filter_var($request->stb_ip, FILTER_VALIDATE_IP) ||
            !filter_var($request->multicast_ip, FILTER_VALIDATE_IP) ||
            is_null($request->stb_ip) || empty($request->stb_ip) ||
            is_null($request->multicast_ip) || empty($request->multicast_ip)
        ) {
            return [
                'status' => "warning",
                'alert' => array(
                    'status' => "warning",
                    'msg' => "Neplatný formát IP"
                )
            ];
        }

        if (is_null($request->channelName) || empty($request->channelName)) {
            return [
                'status' => "warning",
                'alert' => array(
                    'status' => "warning",
                    'msg' => "Název musí existovat"
                )
            ];
        }

        // založení kanálu
        $channel = Channel::create(
            [
                'nazev' => $request->channelName
            ]
        );

        dispatch(new SendNotificationJob(Auth::user()->name, "kanál " . $request->channelName, "vytvořil"));
        // vyhledání id založeného kanálu pro insert + založení multicastových dat
        return MulticastController::create_new($request, Channel::where('nazev', $request->channelName)->first()->id);
    }


    public function change_channel_name(Request $request): array
    {
        // overeni existence channelId
        if (!Channel::where('id', $request->channelId)->first()) {
            return [
                'status' => "error",
                'alert' => array(
                    'status' => "error",
                    'msg' => "Neexistuje kanál"
                )
            ];
        }

        // ověření, že název kanálu není již nikde evidován
        $channelName = Channel::where('id', $request->channelId)->first()->nazev;
        if ($channelName === $request->channelName) {
            return [
                'status' => "success",
                'alert' => array(
                    'status' => "info",
                    'msg' => "Název kanálu se nezměnil"
                ),
                'channelId' => $request->channelId
            ];
        }

        if (Channel::where('nazev',  $request->channelName)->where('id', "!=", $request->channelId)->first()) {
            return [
                'status' => "warning",
                'alert' => array(
                    'status' => "warning",
                    'msg' => "Název již existuje u jiného kanálu"
                )
            ];
        }


        Channel::where('id', $request->channelId)->update(
            [
                'nazev' => $request->channelName
            ]
        );


        return [
            'status' => "success",
            'alert' => array(
                'status' => "success",
                'msg' => "Kanál byl editován"
            ),
            'channelId' => $request->channelId
        ];
    }



    /**
     * odebrání kanálu podle channelId 
     * 
     * 
     * pri odebrání bude automaticky odstraněny eventy, poznámky, multicast informace, tagy, H264 a H265
     *
     * @param Request $request
     * @return array
     */
    public function delete_channel(Request $request): array
    {

        if (!Channel::where('id', $request->channelId)->first()) {
            return [
                'status' => "error",
                'alert' => array(
                    'status' => "error",
                    'msg' => "Nepodařilo se vyhledat kanál"
                )
            ];
        }

        MulticastController::remove_all_by_channelId($request->channelId);
        H264Controller::delete($request->channelId); // maze i tagy
        H265Controller::delete($request->channelId); // maze i tagy
        NoteController::delete_all_notes_by_channelId($request->channelId); // maze poznámky
        ParedTagController::delete_tags('multicastId', $request->channelId); // maze tagy na multicast

        $channel = Channel::where('id', $request->channelId)->first();
        $channel->delete();

        dispatch(new SendNotificationJob(Auth::user()->name, "kanál " . $channel->nazev, "smazal"));

        return [
            'status' => "success",
            'alert' => array(
                'status' => "success",
                'msg' => "Kanál byl úspěšně odebrán"
            )
        ];
    }
}
