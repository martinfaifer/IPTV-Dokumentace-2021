<?php

namespace App\Http\Controllers;

use App\Models\DeviceInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;

class DeviceInterfaceController extends Controller
{
    /**
     * Undocumented function
     *
     * @param [object | null ] $interfaceIds
     * @return array | null
     */
    public static function return_interfaces_belongsToDevice($interfaceIds)
    {

        if (is_null($interfaceIds)) {
            return null;
        }

        $interfaceIds = json_decode($interfaceIds, true);
        // rozebraní pole interfaceIds
        foreach ($interfaceIds as $interfaceId) {
            // vyhledání interfacu
            $output[] = array(
                'id' => $interfaceId,
                'interface' => DeviceInterface::where('id', $interfaceId)->first()->interface
            );
        }

        return $output;
    }

    /**
     * fn pro výpis interfaců, které patří ke kanálu
     */
    public static function return_interface_names_belongsToChannel($interfaceIds)
    {
        if (is_null($interfaceIds)) {
            return null;
        }

        $interfaceIds = json_decode($interfaceIds, true);
        // rozebraní pole interfaceIds
        foreach ($interfaceIds as $interfaceId) {
            // vyhledání interfacu
            $output[] = array(
                'id' => $interfaceId,
                'interface' => DeviceInterface::where('id', $interfaceId)->first()->interface
            );
        }

        return $output;
    }

    public static function return_interfaces_belongs_to_channel_collapse_array($interfaceIds)
    {
        if (is_null($interfaceIds)) {
            return null;
        }

        $interfaceIds = json_decode($interfaceIds, true);
        // rozebraní pole interfaceIds
        foreach ($interfaceIds as $interfaceId) {
            // vyhledání interfacu
            $output[] = array(DeviceInterface::where('id', $interfaceId)->first()->interface);
        }

        return Arr::collapse($output);
    }
}
