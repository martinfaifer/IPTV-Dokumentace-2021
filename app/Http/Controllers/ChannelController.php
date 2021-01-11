<?php

namespace App\Http\Controllers;

use App\Models\Channel;
use App\Models\Device;
use App\Models\Multicast;
use App\Models\MulticastSource;
use Illuminate\Http\Request;

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
}
