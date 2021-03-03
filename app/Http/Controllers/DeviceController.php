<?php

namespace App\Http\Controllers;

use App\Jobs\SendNotificationJob;
use App\Models\Channel;
use App\Models\Device;
use App\Models\DeviceCategory;
use App\Models\DeviceHasChild;
use App\Models\H264;
use App\Models\H265;
use App\Models\LinuxPath;
use App\Models\Multicast;
use App\Models\Vendor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;
use Illuminate\Support\Arr;

class DeviceController extends Controller
{


    static array $result = [
        'status' => "empty"
    ];

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
     * fn pro získání id, dle názvu
     *
     * @return array [status , deviceId]
     */
    public static function return_deviceId_by_name(Request $request): array
    {
        // $request->deviceName
        if (!Device::where('name', $request->deviceName)->first()) {
            return [
                'status' => "error"
            ];
        }

        return [
            'status' => "success",
            'deviceId' => Device::where('name', $request->deviceName)->first()->id
        ];
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
        return Device::get(['id', 'name', 'category'])->toArray();
    }


    public function return_devices_by_categories(): array
    {

        if (!DeviceCategory::first()) {
            return [];
        }

        foreach (DeviceCategory::all() as $category) {
            $output[] = array(
                'category' => $category["name"],
                'category_icon' => $category["icon"],
                'devices' => Device::where('category', $category["id"])->get(['id', 'name'])
            );
        }

        return $output;
    }

    /**
     * fn pro vyhledání zařízení, který , který je spárováno s kanálem
     *
     * @param string $deviceId
     * @return array
     */
    public static function try_to_find_device_belongsTochannel(string $deviceId, $channelId): array
    {
        $path = null;

        if (!$deviceData = Device::where('id', $deviceId)->first()) {
            return self::$result;
        }


        // vyhledání kategorie
        if (DeviceCategory::find($deviceData->category)->name === 'Linux') {
            // vyhledání absolutní cesty
            if ($linuxPath = LinuxPath::where('channelId', $channelId)->first()) {
                $path = $linuxPath->path;
            }
        }


        // zjistení zda kanál má zavbu na potomka
        if ($findingChildren = DeviceHasChild::where('channelId', $channelId)->first()) {

            $childrenData = Device::where('id', $findingChildren->device_child)->first();
            $children = array(
                'id' => $childrenData->id,
                'ip' => $childrenData->ip,
                'name' => $childrenData->name,
                'login_user' => $childrenData->login_user,
                'login_password' => $childrenData->login_password,
                'status' => $childrenData->status,
            );
        } else {
            $children = null;
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
                'interfaces' => DeviceInterfaceController::return_interface_names_belongsToChannel(Multicast::where('channelId', $channelId)->first()->deviceInterface ?? null),
                'children' => $children,
                'path' => $path
            )
        ];
    }

    public static function try_to_find_backup_device_belongsTochannel(string $deviceId, $channelId): array
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
                'interfaces' => DeviceInterfaceController::return_interface_names_belongsToChannel(Multicast::where('channelId', $channelId)->where('isBackup', '!=', null)->first()->deviceInterface ?? null)
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


    public function return_transcoders_and_linux(): array
    {
        foreach (Device::where('category', '3')
            ->Orwhere('category', '5')
            ->get(['id', 'name']) as $device) {
            $output[] = $device->name;
        }

        return $output;
    }


    public function return_only_multiplexors(): array
    {
        $multiplexorId = DeviceCategoryController::find_category_by_type_and_return_id('multiplexor');
        if ($multiplexorId === "0") {
            // neexistuje žádný multiplexor
            return [];
        }

        foreach (Device::where('category', $multiplexorId)->get(['id', 'name']) as $multiplexor) {
            $output[] = $multiplexor->name;
        }

        return $output;
    }

    /**
     * vrácení názvů pouze prijímačů
     *
     * @return array
     */
    public static function return_only_prijem(): array
    {
        // satelit 2 , poIP 4 , linux 5

        foreach (Device::where('category', '2')
            ->orWhere('category', '4')
            ->Orwhere('category', '5')
            ->get(['id', 'name']) as $device) {
            $output[] = $device->name;
        }

        return $output;
    }

    /**
     * fn pro výpis pole, teré obsahuje názvy transcoderů
     *
     * @return array
     */
    public function return_only_transcoders(): array
    {
        $transcoderId = DeviceCategoryController::find_category_by_type_and_return_id('transcoder');
        if ($transcoderId === "0") {
            // neexistuje žádný multiplexor
            return [];
        }

        foreach (Device::where('category', $transcoderId)->get(['id', 'name']) as $transcoder) {
            $output[] = $transcoder->name;
        }

        return $output;
    }

    public function return_sat_and_transcoders(): array
    {

        $transcoderId = DeviceCategoryController::find_category_by_type_and_return_id('transcoder');
        if ($transcoderId === "0") {
            // neexistuje žádný multiplexor
            return [];
        }

        $satId = DeviceCategoryController::find_category_by_type_and_return_id('satelit');
        if ($satId === "0") {
            // neexistuje žádný multiplexor
            return [];
        }

        foreach (Device::where('category', $transcoderId)->orWhere('category', $satId)->get(['id', 'name']) as $transcoder) {
            $output[] = $transcoder->name;
        }

        return $output;
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
        // vyhledávání dle $deviceId nebo deviceName

        if (isset($request->deviceId)) {
            if (!Device::where('id', $request->deviceId)->first()) {
                return [];
            }

            $deviceId = $request->deviceId;
        }

        if (isset($request->deviceName)) {
            // vyhledáni deviceId podle jména
            $device = self::return_deviceId_by_name($request);
            $deviceId = $device['deviceId'];
        }


        // zarizení o danem id ( id, nazev, category, vendor, ip, login_user, login_password, status, sablona)
        $device = Device::where('id', $deviceId)->first();

        // výpis výrobce
        $vendor = VendorController::return_vendor_by_id($device->vendor);

        // vyhledání katergorie
        // $category = DeviceCategoryController::return_device_category_info($device->category);

        if ($device->category === 5) {
            return [
                'status' => "linux"
            ];
        }

        if ($device->category == 4) {
            return [
                "status" => "poIP"
            ];
        }

        // výpis sablony
        // $sablona = json_decode($device->sablona, true);

        // výpis dat
        return array(
            "status" => "sat",
            "data" => array(
                'name' => $device->name,
                'vendor' => $vendor,
                'ip' => $device->ip,
                'status' => $device->status,
                'outputInterfaces' => DeviceInterfaceController::return_interfaces_belongsToDevice($device->haveInterface)
            )
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
            H265::where('deviceId', $request->deviceId)->first() &&
            Multicast::where('multiplexerId', $request->deviceId)->first()
        ) {
            return [
                'status' => "empty"
            ];
        }

        // multicast
        if (Multicast::where('deviceId', $request->deviceId)->first()) {

            foreach (Multicast::where('deviceId', $request->deviceId)->get() as $multicast) {
                // dle id vyhledání nazvu
                $interface =  DeviceInterfaceController::return_interface_names_belongsToChannel($multicast->deviceInterface);
                if (is_null($interface)) {
                    $interface = null;
                } else {

                    $interface = $interface[0]["interface"];
                }
                $outputArr[] = array(
                    'id' => $multicast->channelId,
                    'logo' => Channel::where('id', $multicast->channelId)->first()->logo,
                    'nazev' => Channel::where('id', $multicast->channelId)->first()->nazev,
                    'interface' => $interface
                );
            }
        }

        // multiplexor
        if (Multicast::where('multiplexerId', $request->deviceId)->first()) {

            foreach (Multicast::where('multiplexerId', $request->deviceId)->get() as $multiplexor) {
                // dle id vyhledání nazvu
                $outputArr[] = array(
                    'id' => $multiplexor->channelId,
                    'logo' => Channel::where('id', $multiplexor->channelId)->first()->logo,
                    'nazev' => Channel::where('id', $multiplexor->channelId)->first()->nazev,
                    'interface' => ""
                );
            }
        }

        // H264
        if (H264::where('deviceId', $request->deviceId)->first()) {

            foreach (H264::where('deviceId', $request->deviceId)->get() as $h264) {
                // dle id vyhledání nazvu
                $outputArr[] = array(
                    'id' => $h264->channelId,
                    'logo' => Channel::where('id', $h264->channelId)->first()->logo,
                    'nazev' => Channel::where('id', $h264->channelId)->first()->nazev . " H264",
                    'interface' => ""
                );
            }
        }


        // H265
        if (H265::where('deviceId', $request->deviceId)->first()) {

            foreach (H265::where('deviceId', $request->deviceId)->get() as $h265) {
                // dle id vyhledání nazvu
                $outputArr[] = array(
                    'id' => $h265->channelId,
                    'logo' => Channel::where('id', $h265->channelId)->first()->logo,
                    'nazev' => Channel::where('id', $h265->channelId)->first()->nazev . " H265",
                    'interface' => ""
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



    public function return_device_interfaces(Request $request): array
    {

        if (!Device::where('id', $request->deviceId)->first()) {
            return [
                'status' => "empty"
            ];
        }

        $interfaces = DeviceInterfaceController::return_interfaces_belongsToDevice(Device::where('id', $request->deviceId)->first()->haveInterface);

        if (is_null($interfaces)) {
            return [
                'status' => "empty"
            ];
        }


        return [
            'status' => "success",
            'data' => $interfaces
        ];
    }

    /**
     * výpis dat pro editaci
     *
     * @param Request $request->deviceId
     * @return array
     */
    public function return_data_for_base_edit(Request $request): array
    {
        if (!Device::where('id', $request->deviceId)->first()) {
            return [];
        }

        // name, category, vendor, ip, login_ser, login_password, haveInterface 
        foreach (Device::where('id', $request->deviceId)->get() as $device) {

            $category = DeviceCategoryController::return_device_category_info($device->category);

            $output = array(
                'name' => $device->name,
                'ip' => $device->ip,
                'login_user' => $device->login_user,
                'login_password' => $device->login_password,
                // vyhledání dat
                'haveInterface' => DeviceInterfaceController::return_interfaces_belongsToDevice(Device::where('id', $request->deviceId)->first()->haveInterface),
                'vendor' => VendorController::return_vendor_by_id($device->vendor),
                'category' => $category[0]['name']
            );
        }

        return $output;
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

    /**
     * vytvoření zařízení do systému
     *
     * @param Request $request
     * @return array
     */
    public function device_create(Request $request): array
    {


        // overení, že existuji nutné proměnné
        if (
            is_null($request->deviceName) || empty($request->deviceName) ||
            is_null($request->vendor) || empty($request->vendor) ||
            is_null($request->category) || empty($request->category)
        ) {
            return [
                'alert' => array(
                    'status' => "warning",
                    'msg' => "Nejsou vyplněny všechny hodnoty!"
                ),

            ];
        }


        // overení že názve zařízení jiz neexistuje
        if (Device::where('name', $request->deviceName)->first()) {
            return [
                'alert' => array(
                    'status' => "warning",
                    'msg' => "Zařízení s tímto názvem již existuje"
                ),

            ];
        }

        if (is_null($request->interfaces) || empty($request->interfaces)) {
            $interfaces = null;
        } else {

            foreach ($request->interfaces as $interface) {
                $interfaces[] = $interface['id'];
            }

            $interfaces = json_encode($interfaces);
        }

        try {
            if (is_string($request->vendor)) {
                $vendor = $request->vendor;
            } else {
                $vendor = $request->vendor["vendor"];
            }

            if (is_string($request->category)) {
                $category = $request->category;
            } else {
                $category = $request->category["name"];
            }


            Device::create(
                [
                    'name' => $request->deviceName,
                    'category' => DeviceCategory::where('name', $category)->first()->id,
                    'vendor' => Vendor::where('vendor', $vendor)->first()->id,
                    'ip' => $request->deviceIp,
                    'login_user' => $request->deviceUser,
                    'login_password' => $request->devicePassword,
                    'haveInterface' => $interfaces
                ]
            );
            $deviceId = Device::where('name', $request->deviceName)->first()->id;
            VendorController::check_if_vendor_is_know($vendor, $deviceId, "create");

            dispatch(new SendNotificationJob(Auth::user()->name, $request->deviceName, "vytvořil"));

            return [
                'alert' => array(
                    'status' => "success",
                    'msg' => "Zařízení bylo vytvořeno"
                ),
                'status' => "success",
                'deviceId' => $deviceId
            ];
        } catch (\Throwable $th) {


            return [
                'alert' => array(
                    'status' => "error",
                    'msg' => "Selhala editace! ERROR 500"
                ),

            ];
        }
    }

    /**
     * uprava interfacu dle zařízení
     *
     * @param Request $request
     * @return void
     */
    public static function edit_interface(Request $request)
    {
        if (is_null($request->interfaces) || empty($request->interfaces)) {
            $interfaces = null;
        } else {

            foreach ($request->interfaces as $interface) {
                $interfaces[] = $interface['id'];
            }

            $interfaces = json_encode($interfaces);

            // update
            if (!Device::where('id', $request->deviceId)->first()) {
                return [
                    'status' => "deviceNotExist"
                ];
            }

            try {
                Device::where('id', $request->deviceId)->update(
                    [
                        'haveInterface' => $interfaces
                    ]
                );

                dispatch(new SendNotificationJob(Auth::user()->name, Device::where('id', $request->deviceId)->first()->name, "editoval"));

                return [
                    'alert' => array(
                        'status' => "success",
                        'msg' => "Zařízení bylo upraveno"
                    ),
                    'status' => "success",
                ];
            } catch (\Throwable $th) {
                return [
                    'alert' => array(
                        'status' => "error",
                        'msg' => "Selhala editace! ERROR 500"
                    ),

                ];
            }
        }
    }


    public function remove_interfaces(Request $request): array
    {
        Device::where('id', $request->deviceId)->update(
            [
                'haveInterface' => null
            ]
        );

        return [
            'alert' => array(
                'status' => "success",
                'msg' => "Zařízení upraveno"
            ),
            'status' => "remove",
        ];
    }



    /**
     * editace zarízení
     *
     * @param Request $request
     * @return array
     */
    public function edit_device(Request $request): array
    {
        // overení, že existuji nutné proměnné
        if (
            is_null($request->name) || empty($request->name) ||
            is_null($request->vendor) || empty($request->vendor) ||
            is_null($request->category) || empty($request->category)
        ) {
            return [
                'alert' => array(
                    'status' => "warning",
                    'msg' => "Nejsou vyplněny všechny hodnoty!"
                ),

            ];
        }


        if (is_null($request->haveInterface) || empty($request->haveInterface)) {
            $interfaces = null;
        } else {

            foreach ($request->haveInterface as $interface) {
                $interfaces[] = $interface['id'];
            }

            $interfaces = json_encode($interfaces);
        }

        try {
            if (is_string($request->vendor)) {
                $vendor = $request->vendor;
            } else {
                $vendor = $request->vendor["vendor"];
                // overení zda se jedná o známého vendora
                VendorController::check_if_vendor_is_know($vendor, $request->deviceId, "create");
            }

            if (is_string($request->category)) {
                $category = $request->category;
            } else {
                $category = $request->category["name"];
            }


            Device::where('id', $request->deviceId)->update(
                [
                    'name' => $request->name,
                    'category' => DeviceCategory::where('name', $category)->first()->id,
                    'vendor' => Vendor::where('vendor', $vendor)->first()->id,
                    'ip' => $request->ip,
                    'login_user' => $request->login_user,
                    'login_password' => $request->login_password,
                    'haveInterface' => $interfaces
                ]
            );

            dispatch(new SendNotificationJob(Auth::user()->name, $request->name, "vytvořil"));

            return [
                'alert' => array(
                    'status' => "success",
                    'msg' => "Zařízení bylo upraveno"
                ),
                'status' => "success",
                'deviceId' => $request->deviceId
            ];
        } catch (\Throwable $th) {


            return [
                'alert' => array(
                    'status' => "error",
                    'msg' => "Selhala editace! ERROR 500"
                ),

            ];
        }
    }



    /**
     * fn pro odebrní zařízení ze systému 
     *
     * @param Request $request->deviceId
     * @return array
     */
    public function delete_device(Request $request): array
    {
        if (!Device::where('id', $request->deviceId)->first()) {
            return [
                'alert' => array(
                    'status' => "error",
                    'msg' => "Neexistuje zařízení"
                ),
                'status' => "error",
            ];
        }

        $device = Device::where('id', $request->deviceId)->first();


        // vyhledání zda na zařízení neexistuje vazba 
        if (Multicast::where('deviceId', $request->deviceId)->orWhere('multiplexerId', $request->deviceId)->first()) {
            // zarizení je evidováno na kanále
            $multicast = "fail";
        } else {
            // multicast je cistý
            $multicast = "success";
        }


        if (H264::where('deviceId', $request->deviceId)->first()) {
            // zarizení je evidováno na kanále
            $h264 = "fail";
        } else {
            // multicast je cistý
            $h264 = "success";
        }

        if (H265::where('deviceId', $request->deviceId)->first()) {
            // zarizení je evidováno na kanále
            $h265 = "fail";
        } else {
            // multicast je cistý
            $h265 = "success";
        }


        if ($multicast === "fail" || $h264 === "fail" || $h265 === "fail") {
            return [
                'alert' => array(
                    'status' => "error",
                    'msg' => "Na zařízení je vytvořena vazba"
                ),
                'status' => "error",
            ];
        }

        // vyhledání a smazání vazeb
        VendorController::check_if_vendor_is_know(Vendor::where('id', $device->vendor)->first()->vendor, $request->deviceId, "delete");

        $device->delete();

        dispatch(new SendNotificationJob(Auth::user()->name, $device->name, "smazal"));

        return [
            'alert' => array(
                'status' => "success",
                'msg' => "Zařízení bylo odstraněno"
            ),
            'status' => "success",
        ];
    }

    /**
     * fn pro výpis hw vyuzití pouze u transcoderů Q0x, které mají vendora 4 (nVidia)
     *
     * @param Request $request->deviceId
     * @return mixed
     */
    public function return_transcoder_usage(Request $request)
    {
        // $request->deviceId
        if ($device = Device::where('id', $request->deviceId)->first()) {

            if ($device->vendor === 4) {
                $transcoderIp = ApiController::return_transcoder_ip($device->name);
                if (!is_null($transcoderIp)) {
                    return Http::get('http://' . $transcoderIp . '/tcontrol.php?CMD=NVSTATS');
                }
            } else {
                return null;
            }
        } else {
            return null;
        }
    }



    public static function get_device_result($device)
    {

        $outputArr = array();

        $thisDevice = Device::where('name', $device)->first();

        if (!$thisDevice) {
            return $outputArr;
        }

        // multicast
        if (Multicast::where('deviceId', $thisDevice->id)->first()) {

            foreach (Multicast::where('deviceId', $thisDevice->id)->get() as $multicast) {
                // dle id vyhledání nazvu
                $channel = Channel::where('id', $multicast->channelId)->first();
                $outputArr[] = array(
                    'id' => $multicast->channelId,
                    'img' => $channel->logo,
                    'icon' => "false",
                    'name' => $channel->nazev,
                    'url' => '/channel/' .  $channel->id
                );

                unset($channel);
            }
        }

        // multiplexor
        if (Multicast::where('multiplexerId', $thisDevice->id)->first()) {

            foreach (Multicast::where('multiplexerId', $thisDevice->id)->get() as $multiplexor) {
                // dle id vyhledání nazvu
                $channel = Channel::where('id', $multiplexor->channelId)->first();
                $outputArr[] = array(
                    'id' => $multiplexor->channelId,
                    'img' => $channel->logo,
                    'icon' => "false",
                    'name' => $channel->nazev,
                    'url' => '/channel/' .  $channel->id
                );

                unset($channel);
            }
        }

        // H264
        if (H264::where('deviceId', $thisDevice->id)->first()) {

            foreach (H264::where('deviceId', $thisDevice->id)->get() as $h264) {
                // dle id vyhledání nazvu
                $channel = Channel::where('id', $h264->channelId)->first();
                $outputArr[] = array(
                    'id' => $h264->channelId,
                    'img' => $channel->logo,
                    'icon' => "false",
                    'name' => $channel->nazev . " H264",
                    'url' => '/channel/' . $channel->id . '/h264'
                );
                unset($channel);
            }
        }


        // H265
        if (H265::where('deviceId', $thisDevice->id)->first()) {

            foreach (H265::where('deviceId', $thisDevice->id)->get() as $h265) {
                // dle id vyhledání nazvu
                $channel = Channel::where('id', $h265->channelId)->first();
                $outputArr[] = array(
                    'id' => $h265->channelId,
                    'img' => $channel->logo,
                    'icon' => "false",
                    'name' => $channel->nazev . " H265",
                    'url' => '/channel/' . $channel->id . '/h265'
                );

                unset($channel);
            }
        }

        return $outputArr;
    }


    public static function show_channels_on_device(string $device): array
    {
        if (Str::contains($device, ',')) {

            $devices = explode(",", $device);

            foreach ($devices as $singleDevice) {
                $output[] = self::get_device_result($singleDevice);
            }

            if (count($output) >= 2) {
                $output = Arr::collapse($output);
            }

            return $output;
        } else {
            return self::get_device_result($device);
        }
    }
}
