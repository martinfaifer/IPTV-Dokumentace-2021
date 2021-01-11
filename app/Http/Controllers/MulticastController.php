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

        return DeviceController::try_to_find_device_belongsTochannel($multicast->deviceId, $multicast->id);
    }

    /**
     * fn pro zjistejí zda existuje zaloha pro prijem
     *
     * @return array
     */
    public function return_backup_device_by_channel(): array
    {
        if (!$this->check_if_channelId_exist_for_multicast()) {
            return $this->result;
        }
        $multicast = $this->load_multicast_data();
        if (is_null($multicast->isBackup)) {
            return $this->result;
        }
        return DeviceController::try_to_find_device_belongsTochannel($multicast->isBackup, $multicast->id);
    }
}
