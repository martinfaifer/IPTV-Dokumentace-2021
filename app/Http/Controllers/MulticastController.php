<?php

namespace App\Http\Controllers;

use App\Models\Multicast;
use App\Models\MulticastSource;
use Illuminate\Http\Request;

class MulticastController extends Controller
{
    public string $channelId;
    public array $result = [
        'status' => "empty"
    ];


    public function __construct(Request $request)
    {
        $this->channelId = $request->channelId;
    }

    public function __destruct()
    {
        $this->channelId;
    }

    /**
     * fn pro kontrolu zda existuje channelId v multicastu
     *
     * @return bool
     */
    public function check_if_channelId_exist_for_multicast(): bool
    {
        if (Multicast::where('channelId', $this->channelId)->first()) {
            return true;
        } else {
            return false;
        }
    }


    public function check_if_channelId_exist_for_backup_multicast(): bool
    {
        if (Multicast::where('channelId', $this->channelId)->where('isBackup', "!=", null)->first()) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * fn pro vyhledání kanálů
     *
     * @return void
     */
    public function load_multicast_data(): object
    {
        if (!$this->check_if_channelId_exist_for_multicast()) {
            return $this->result;
        }

        return  Multicast::where('channelId', $this->channelId)->first();
    }

    /**
     * vyhledání backupu
     *
     * @return object
     */
    public function load_multicast_backup_data(): object
    {
        if (!$this->check_if_channelId_exist_for_backup_multicast()) {
            return $this->result;
        }

        return  Multicast::where('channelId', $this->channelId)->where('isBackup', "!=", null)->first();
    }

    /**
     * vyhledání multicastových informací jako je zdroj multicastu, ip multicastu, ip k stb a zda je zdroj backup ci nikoliv
     *
     * @return array
     */
    public function return_multicast_data_for_current_chanel(): array
    {
        if (!$this->check_if_channelId_exist_for_multicast()) {
            return $this->result;
        }

        foreach (Multicast::where('channelId', $this->channelId)->get() as $multicast) {
            // vyhledání zdroje multicastu
            // vytvorení pole 
            $data[$multicast->id] = array(
                'id' => $multicast->id,
                'zdroj' => MulticastSource::where('id', $multicast->zdrojId)->first()->zdroj,
                'stb_ip' => $multicast->stb_ip,
                'multicast_ip' => $multicast->multicast_ip,
                'isBackup' => $this->fill_backup_or_primar($multicast->isBackup)
            );
        }

        return [
            'status' => "success",
            'data' => $data
        ];
    }

    /**
     * fn pro vyplnění zda je zdroj primar ci backup
     * logika => pokud je $sourceType === null jedná se o primár
     *
     * @param [mixed] $sourceType
     * @return string
     */
    public static function fill_backup_or_primar($sourceType): string
    {

        if (!is_null($sourceType)) {
            return "backup";
        }

        return "primar";
    }


    /**
     * fn pro vyhledání a navrácení do tabu multicast informaci o multiplexoru na kterém je kanal ulozen
     *
     * @return array
     */
    public function return_multiplexer_by_channel(): array
    {
        if (!$this->check_if_channelId_exist_for_multicast()) {
            return $this->result;
        }
        $multicast = $this->load_multicast_data();
        if (is_null($multicast->multiplexerId)) {
            return $this->result;
        }

        return DeviceController::try_to_find_device_belongsTochannel($multicast->multiplexerId, $multicast->id);
    }


    /**
     * fn pro zjistení zarizení na které je kanal naparovn
     *
     * @return array
     */
    public function return_device_by_channel(): array
    {
        if (!$this->check_if_channelId_exist_for_multicast()) {
            return $this->result;
        }
        $multicast = $this->load_multicast_data();
        if (is_null($multicast->deviceId)) {
            return $this->result;
        }

        return DeviceController::try_to_find_device_belongsTochannel($multicast->deviceId, $multicast->channelId);
    }

    /**
     * fn pro zjistejí zda existuje zaloha pro prijem
     *
     * @return array
     */
    public function return_backup_device_by_channel(): array
    {
        if (!$this->check_if_channelId_exist_for_backup_multicast()) {
            return $this->result;
        }
        $multicast = $this->load_multicast_backup_data();
        if (is_null($multicast->isBackup)) {
            return $this->result;
        }

        if (is_null($multicast->deviceId)) {
            return $this->result;
        }
        return DeviceController::try_to_find_backup_device_belongsTochannel($multicast->deviceId, $multicast->channelId);
    }


    public static function create_new(Request $request, $channelId = null): array
    {

        if (!is_null($channelId)) {
            $request->channelId = $channelId;
        }

        // zjistení zda se jedná o backup
        if (
            is_null($request->backup_multicastZdroj) || empty($request->backup_multicastZdroj) ||
            is_null($request->backup_multicast_ip) || empty($request->backup_multicast_ip)
        ) {

            Multicast::create(
                [
                    'channelId' => $request->channelId,
                    'stb_ip' => $request->stb_ip,
                    'multicast_ip' => $request->multicast_ip,
                    'zdrojId' => $request->multicastZdroj["id"],
                    'isBackup' => null,
                ]
            );
        } else {
            $backupZdrojId = $request->backup_multicastZdroj["id"];
            $backup = "yes";

            Multicast::create(
                [
                    'channelId' => $request->channelId,
                    'stb_ip' => $request->stb_ip,
                    'multicast_ip' => $request->multicast_ip,
                    'zdrojId' => $request->multicastZdroj["id"],
                    'isBackup' => null,
                ]
            );

            Multicast::create(
                [
                    'channelId' => $request->channelId,
                    'stb_ip' => null,
                    'multicast_ip' => $request->backup_multicast_ip,
                    'zdrojId' => $backupZdrojId,
                    'isBackup' => $backup,
                ]
            );
        }

        return [
            "status" => "success",
            "alert" => array(
                'status' => "success",
                'msg' => "Kanál byl upraven"
            ),
            'channelId' => $request->channelId
        ];
    }

    public static function update(Request $request): array
    {
        if (
            is_null($request->backup_multicastZdroj) || empty($request->backup_multicastZdroj) ||
            is_null($request->backup_multicast_ip) || empty($request->backup_multicast_ip)
        ) {

            Multicast::where('channelId', $request->channelId)->where('isBackup', null)->update(
                [
                    'stb_ip' => $request->stb_ip,
                    'multicast_ip' => $request->multicast_ip,
                    'zdrojId' => $request->multicastZdroj["id"],
                    'isBackup' => null,
                ]
            );

            if (Multicast::where('channelId', $request->channelId)->where('isBackup', "!=", null)->first()) {
                Multicast::where('channelId', $request->channelId)->where('isBackup', "!=", null)->first()->delete();
            }
        } else {
            $backupZdrojId = $request->backup_multicastZdroj["id"];
            $backup = "yes";

            Multicast::where('channelId', $request->channelId)->where('isBackup', null)->update(
                [
                    'stb_ip' => $request->stb_ip,
                    'multicast_ip' => $request->multicast_ip,
                    'zdrojId' => $request->multicastZdroj["id"],
                    'isBackup' => null,
                ]
            );

            if (Multicast::where('channelId', $request->channelId)->where('isBackup', "!=", null)->first()) {
                Multicast::where('channelId', $request->channelId)->where('isBackup', "!=", null)->update(
                    [
                        'stb_ip' => null,
                        'multicast_ip' => $request->backup_multicast_ip,
                        'zdrojId' => $backupZdrojId,
                        'isBackup' => $backup,
                    ]
                );
            } else {
                Multicast::create(
                    [
                        'channelId' => $request->channelId,
                        'stb_ip' => null,
                        'multicast_ip' => $request->backup_multicast_ip,
                        'zdrojId' => $backupZdrojId,
                        'isBackup' => $backup,
                    ]
                );
            }
        }

        return [
            "status" => "success",
            "alert" => array(
                'status' => "success",
                'msg' => "Kanál byl upraven"
            )
        ];
    }


    public static function update_multiplexor($multiplexorId, $channelId): array
    {

        try {

            // vyhledání záznamu pro update a aktualizace záznamu
            Multicast::where('channelId', $channelId)->where('isBackup', null)->update(
                [
                    'multiplexerId' => $multiplexorId
                ]
            );


            return [
                'status' => "success",
                'alert' => array(
                    'status' => "success",
                    'msg' => "Kanál byl upraven"
                ),
                'channelId' => $channelId
            ];
        } catch (\Throwable $th) {
            return [
                'status' => "error",
                'alert' => array(
                    'status' => "error",
                    'msg' => "Neco selhalo | ERROR 500"
                )
            ];
        }
    }

    /**
     * editace prijmu kanálu
     *
     * @param [type] $deviceId
     * @param [type] $channelId
     * @return array
     */
    public static function update_prijem(string $deviceId, string  $channelId, $interfaces): array
    {

        try {

            if (is_null($interfaces)) {
                $deviceInterface = null;
            } else {

                foreach ($interfaces as $interface) {
                    $deviceInterface[] = $interface['id'];
                }

                $deviceInterface = json_encode($deviceInterface, true);
            }

            // vyhledání záznamu pro update a aktualizace záznamu
            Multicast::where('channelId', $channelId)->where('isBackup', null)->update(
                [
                    'deviceId' => $deviceId,
                    'deviceInterface' => $deviceInterface
                ]
            );


            return [
                'status' => "success",
                'alert' => array(
                    'status' => "success",
                    'msg' => "Kanál byl upraven"
                ),
                'channelId' => $channelId
            ];
        } catch (\Throwable $th) {
            return [
                'status' => "error",
                'alert' => array(
                    'status' => "error",
                    'msg' => "Neco selhalo | ERROR 500"
                )
            ];
        }
    }


    public static function update_backup(string $deviceId, string  $channelId, $interfaces): array
    {
        try {

            if (is_null($interfaces)) {
                $deviceInterface = null;
            } else {

                foreach ($interfaces as $interface) {
                    $deviceInterface[] = $interface['id'];
                }

                $deviceInterface = json_encode($deviceInterface, true);
            }

            // vyhledání záznamu pro update a aktualizace záznamu
            Multicast::where('channelId', $channelId)->where('isBackup', "!=", null)->update(
                [
                    'deviceId' => $deviceId,
                    'deviceInterface' => $deviceInterface
                ]
            );


            return [
                'status' => "success",
                'alert' => array(
                    'status' => "success",
                    'msg' => "Kanál byl upraven"
                ),
                'channelId' => $channelId
            ];
        } catch (\Throwable $th) {
            return [
                'status' => "error",
                'alert' => array(
                    'status' => "error",
                    'msg' => "Neco selhalo | ERROR 500"
                )
            ];
        }
    }


    /**
     * odebrání multiplexoru od kanálu
     *
     * @param Request $request-channelId
     * @return array
     */
    public static function remove_multiplexor(Request $request): array
    {
        try {
            Multicast::where('channelId', $request->channelId)->where('isBackup', null)->update(
                [
                    'multiplexerId' => null
                ]
            );

            return [
                'status' => "success",
                'alert' => array(
                    'status' => "success",
                    'msg' => "Kanál byl upraven"
                )
            ];
        } catch (\Throwable $th) {
            return [
                'status' => "error",
                'alert' => array(
                    'status' => "error",
                    'msg' => "Neco selhalo | ERROR 500"
                )
            ];
        }
    }


    public static function remove_prijem(Request $request): array
    {
        try {
            Multicast::where('channelId', $request->channelId)->where('isBackup', null)->update(
                [
                    'deviceId' => null,
                    'deviceInterface' => null
                ]
            );

            return [
                'status' => "success",
                'alert' => array(
                    'status' => "success",
                    'msg' => "Kanál byl upraven"
                )
            ];
        } catch (\Throwable $th) {
            return [
                'status' => "error",
                'alert' => array(
                    'status' => "error",
                    'msg' => "Neco selhalo | ERROR 500"
                )
            ];
        }
    }


    public static function remove_backup(Request $request): array
    {
        try {
            Multicast::where('channelId', $request->channelId)->where('isBackup', "!=", null)->update(
                [
                    'deviceId' => null,
                    'deviceInterface' => null
                ]
            );

            return [
                'status' => "success",
                'alert' => array(
                    'status' => "success",
                    'msg' => "Kanál byl upraven"
                )
            ];
        } catch (\Throwable $th) {
            return [
                'status' => "error",
                'alert' => array(
                    'status' => "error",
                    'msg' => "Neco selhalo | ERROR 500"
                )
            ];
        }
    }


    /**
     * Undocumented function
     *
     * @param Request $request
     * @return array
     */
    public static function check_channel(Request $request): array
    {
        if ($request->param === 'multiplexor') {
            if (Multicast::where('channelId', $request->channelId)->where('isBackup', null)->where('multiplexerId', '!=', null)->first()) {
                // kanál existuje s multiplexore 
                return [
                    'status' => "warning",
                    'alert' => array(
                        'status' => "warning",
                        'msg' => "Kanál má již k sobě přiřazeno zařízení"
                    )
                ];
            } else {
                return [
                    'status' => "success"
                ];
            }
        }


        if ($request->param === 'prijem') {
            if (Multicast::where('channelId', $request->channelId)->where('isBackup', null)->where('deviceId', '!=', null)->first()) {
                // kanál existuje 
                return [
                    'status' => "warning",
                    'alert' => array(
                        'status' => "warning",
                        'msg' => "Kanál má již k sobě přiřazeno zařízení"
                    )
                ];
            } else {
                return [
                    'status' => "success"
                ];
            }
        }


        if ($request->param === 'backup') {
            // vyhledání zda existuje backup ke kterému se dá pripojit zařízení
            if (!Multicast::where('channelId', $request->channelId)->where('isBackup', "!=", null)->first()) {
                return [
                    'status' => "warning",
                    'alert' => array(
                        'status' => "warning",
                        'msg' => "Kanál nemá vytvořené žádné backup adresy"
                    )
                ];
            }

            if (Multicast::where('channelId', $request->channelId)->where('isBackup', "!=", null)->where('deviceId', '!=', null)->first()) {
                // kanál existuje 
                return [
                    'status' => "warning",
                    'alert' => array(
                        'status' => "warning",
                        'msg' => "Kanál má již k sobě přiřazeno zařízení"
                    )
                ];
            } else {
                return [
                    'status' => "success"
                ];
            }
        }
    }

    /**
     * odebrání multicastu dle id
     *
     * @param [type] $channelId
     * @return void
     */
    public static function remove_all_by_channelId(string $channelId): void
    {
        if (Multicast::where('channelId', $channelId)->first()) {
            foreach (Multicast::where('channelId', $channelId)->get() as $multicastToDelete) {
                Multicast::where('id', $multicastToDelete['id'])->first()->delete();
            }
        }
    }
}
