<?php

namespace App\Http\Controllers;

use App\Jobs\SendNotificationJob;
use App\Models\Channel;
use App\Models\Device;
use App\Models\DeviceCategory;
use App\Models\H264;
use App\Models\H265;
use App\Models\Multicast;
use App\Models\Vendor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DeviceController extends Controller
{

    /**
     * fn pro vrácen názvu zařízení
     *
     * @param Request $request
     * @return string
     */
    public function return_deviceName(Request $request): string
    {
        if (!Device::where('id', $request->deviceId)->first()) {
            return "neexistuje";
        }

        return Device::where('id', $request->deviceId)->first()->name;
    }

    /**
     * fn pro výpis všech zařízení, kde se vrací id a název (name)
     * 
     * pokud neeistuje žádné zařízení, vráce se empty array()
     *
     * @return array
     */
    public function return_devices(): array
    {
        if (!Device::first()) {
            return [];
        }

        return Device::get(['id', 'name'])->toArray();
    }

    static array $result = [
        'status' => "empty"
    ];

    /**
     * fn pro vyhledání zařízení, který , který je spárováno s kanálem
     *
     * @param string $deviceId
     * @return array
     */
    public static function try_to_find_device_belongsTochannel(string $deviceId, $channelId): array
    {
        if (!Device::where('id', $deviceId)->first()) {
            return self::$result;
        }

        $device = Device::where('id', $deviceId)->first();
        return [
            'status' => "success",
            'data' => array(
                'id' => $device->id,
                'ip' => $device->ip,
                'name' => $device->name,
                'login_user' => $device->login_user,
                'login_password' => $device->login_password,
                'status' => $device->status,
                'interfaces' => DeviceInterfaceController::return_interfaces_belongs_to_channel_collapse_array(
                    Multicast::where('channelId', $channelId)->first()->deviceInterface ?? null
                )
            )
        ];
    }


    /**
     * fn pro získání základních informací o transcoderu
     *
     * @param [type] $transcoderId
     * @return array
     */
    public static function return_transcoder($transcoderId): array
    {
        if (!Device::where('id', $transcoderId)->first()) {
            return [
                'status' => "empty"
            ];
        }

        $transcoder = Device::where('id', $transcoderId)->first();

        return [
            'status' => "success",
            'data' => array(
                'id' => $transcoderId,
                'name' => $transcoder->name,
                'ip' => $transcoder->ip
            )
        ];
    }


    /**
     * fn pro vypsání všech zařízení, které nejosu multiplexor
     *
     * @return array
     */
    public function return_devices_without_multiplexor(): array
    {
        $multiplexorId = DeviceCategoryController::find_category_by_type_and_return_id('multiplexor');
        if ($multiplexorId === "0") {
            // neexistuje žádný multiplexor
            return Device::get(['id', 'name'])->toArray();
        }

        // vyhledání zarizení, kdy není se eliminuje id multiplexoru
        return Device::where('category', "!=", $multiplexorId)->get(['id', 'name'])->toArray();
    }

    public function return_multiplexors(): array
    {
        $multiplexorId = DeviceCategoryController::find_category_by_type_and_return_id('multiplexor');
        if ($multiplexorId === "0") {
            return [];
        }

        return Device::where('category', $multiplexorId)->get(['id', 'name'])->toArray();
    }


    /**
     * fn pro získání detailních informaci o zarizení, fn se dá vyuzit pro mnoho modulu
     *
     * @param Request $request->deviceId
     * @return array
     */
    public static function device_info(Request $request)
    {

        if (!Device::where('id', $request->deviceId)->first()) {
            return [];
        }

        // zarizení o danem id ( id, nazev, category, vendor, ip, login_user, login_password, status, sablona)
        $device = Device::where('id', $request->deviceId)->first();

        // výpis výrobce
        $vendor = VendorController::return_vendor_by_id($device->vendor);

        // vyhledání katergorie
        DeviceCategoryController::return_device_category_info($device->category);

        // výpis sablony
        $sablona = json_decode($device->sablona, true);

        // výpis dat
        return array(
            'name' => $device->name,
            'vendor' => $vendor,
            'ip' => $device->ip,
            'status' => $device->status,
            'sablona' => $sablona,
            'outputInterfaces' => DeviceInterfaceController::return_interfaces_belongsToDevice($device->haveInterface)
        );
    }


    /**
     * fn pro 
     *
     * @param string|null $deviceId
     * @return void
     */
    public static function return_device_id_and_name_by_id($deviceId)
    {
        if (is_null($deviceId)) {
            return $deviceId;
        }

        return [

            'id' =>  intval($deviceId),
            'name' => Device::where('id', $deviceId)->first()->name

        ];
    }


    /**
     * fn pro vypsání informací o zařízení jako je id, ip, login ( user , password) , categorie , výrobce 
     * 
     * pokud nebylo nalezeno deviceId => status => empty
     * pakliže existuje deviceId vraci pole status => success , data => $data
     *
     * @param Request $request->deviceId
     * @return array
     */
    public static function return_device_info_for_device_without_template(Request $request): array
    {

        if (!Device::where('id', $request->deviceId)->first()) {
            return [
                'status' => "empty"
            ];
        }

        $device = Device::where('id', $request->deviceId)->first();

        return [
            'status' => "success",
            'data' => array(
                'id' => $device->id,
                'name' => $device->name,
                'ip' => $device->ip ?? null,
                'login_user' => $device->login_user ?? null,
                'login_password' => $device->login_password ?? null,
                'category' => DeviceCategory::where('id', $device->category)->first()->name,
                'vendor' => Vendor::where('id', $device->vendor)->first()->vendor
            )
        ];
    }

    /**
     * fn pro vyhledání šablony a její vypsání pokud existuje, pokud ne vrací status => empty
     *
     * @param Request $request->deviceId
     * @return void
     */
    public function return_device_template_if_exist(Request $request): array
    {

        if (!Device::where('id', $request->deviceId)->first()) {
            return [
                'status' => "empty"
            ];
        }

        $device = Device::where('id', $request->deviceId)->first();

        // vyhledání vendora, dle kterého se vyplní interfacy

        switch (Vendor::where('id', $device->vendor)->first()->vendor) {
            case "Blankom":
                return BlankomInterfaceController::return_blankom_interfaces_with_data($request->deviceId);
                break;

            case "FTE":
                return FteInterfaceController::return_fte_interfaces_with_data($request->deviceId);
                break;

            case "nVidia":
                return [];
                break;

            case "Cisco":
                return  PowerVuInterfaceController::return_fte_interfaces_with_data($request->deviceId);
                break;

            case "Titan":
                return [];
                break;

            case "Atlanta":
                return [];
                break;

            case "ProStream":
                return [];
                break;

            default:
                return [];
        }
    }


    public function return_channels_belongsTo_device(Request $request): array
    {
        // $request->deviceId
        // vyhledání zda existuje deviceId ( multicast, h264, h265 )
        if (
            Multicast::where('deviceId', $request->deviceId)->first() &&
            H264::where('deviceId', $request->deviceId)->first() &&
            H265::where('deviceId', $request->deviceId)->first()
        ) {
            return [
                'status' => "empty"
            ];
        }

        // multicast
        if (Multicast::where('deviceId', $request->deviceId)->first()) {

            foreach (Multicast::where('deviceId', $request->deviceId)->get() as $multicast) {
                // dle id vyhledání nazvu
                $outputArr[] = array(
                    'id' => $multicast->channelId,
                    'nazev' => Channel::where('id', $multicast->channelId)->first()->nazev
                );
            }
        }

        // H264
        if (H264::where('deviceId', $request->deviceId)->first()) {

            foreach (H264::where('deviceId', $request->deviceId)->get() as $h264) {
                // dle id vyhledání nazvu
                $outputArr[] = array(
                    'id' => $h264->channelId,
                    'nazev' => Channel::where('id', $h264->channelId)->first()->nazev . " H264"
                );
            }
        }


        // H265
        if (H265::where('deviceId', $request->deviceId)->first()) {

            foreach (H265::where('deviceId', $request->deviceId)->get() as $h265) {
                // dle id vyhledání nazvu
                $outputArr[] = array(
                    'id' => $h265->channelId,
                    'nazev' => Channel::where('id', $h265->channelId)->first()->nazev . " H265"
                );
            }
        }

        if (!isset($outputArr)) {
            return [
                'status' => "empty"
            ];
        }

        return [
            'status' => "success",
            'data' => $outputArr
        ];
    }



    /**
     * EDITACE 
     */


    /**
     * fn pro editaci zarízení, kdy je možné editovat Název, IP, login (uzivatel, heslo), kategorii zarizení, Výrobce
     * editace probíhá dle vyhledání stávajícího zařízení podle deviceId
     *
     * deviceId , name, category, vendor jsou ždy požadovány, pokud budou null nebo empty => vyvolání alertu
     *
     * @param Request $request->deviceId, name, ip, login_user, login_password, category, vendor
     * @return array
     */
    public static function device_edit(Request $request): array
    {

        // editace zarizení dle deviceId

        // overení existunce deviceId 
        if (!Device::where('id', $request->deviceId)->first()) {
            return [
                'status' => "error",
                'msg' => "Neexistuje zařízení"
            ];
        }

        // validace vstupů
        if (
            empty($request->name) || is_null($request->name) ||
            empty($request->category) || is_null($request->category) ||
            empty($request->vendor) || is_null($request->vendor)
        ) {
            return [
                'status' => "warning",
                'msg' => "Není vše řádně vyplněno"
            ];
        }



        // samotná editace zařízení , vyhledání category a vendora dle názvů id
        try {

            Device::where('id', $request->deviceId)->update(
                [
                    'name' => $request->name,
                    'category' => DeviceCategory::where('name', $request->category)->first()->id,
                    'vendor' => Vendor::where('vendor', $request->vendor)->first()->id,
                    'ip' => $request->ip,
                    'login_user' => $request->login_user,
                    'login_password' => $request->login_password
                ]
            );

            dispatch(new SendNotificationJob(Auth::user()->name, $request->name, "editoval"));

            return [
                'status' => "success",
                'msg' => "Editováno"
            ];
        } catch (\Throwable $th) {

            return [
                'status' => "error",
                'msg' => "Selhala editace! ERROR 500"
            ];
        }
    }
}
