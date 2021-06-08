<?php

namespace App\Http\Controllers;

use App\Models\UnicastChunkStoreId;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Traits\NotificationTrait;
use Illuminate\Support\Facades\Validator;

class UnicastChunkStoreIdController extends Controller
{
    use NotificationTrait;

    public static function create(Request $request, $channelId)
    {

        if (UnicastChunkStoreId::where('channelId', $request->channelId)->first()) {
            // nic nedelat
        } else {
            UnicastChunkStoreId::create([
                'channelId' => $channelId,
                'chunkStoreId' => $request->chunkStoreId
            ]);

            return self::frontend_notification("success", "success", "Vytvořeno!");
        }
    }

    /**
     * Undocumented function
     *
     * @param Request $request->channelId
     * @return string
     */
    public function return_chunkStoreId(Request $request): string
    {

        if (!UnicastChunkStoreId::where('channelId', $request->channelId)->first()) {
            return "0";
        }

        return UnicastChunkStoreId::where('channelId', $request->channelId)->first()->chunkStoreId;
    }


    public static function edit(Request $request): array
    {
        $validation = Validator::make($request->all(), [
            'channelId' => 'required',
            'chunkStoreId' => 'required'
        ]);
        if ($validation->fails()) {
            return self::frontend_notification("error", "error", "Není vše vyplněno!");
        }

        if (!$editableChunkStoreId = UnicastChunkStoreId::where('channelId', $request->channelId)->first()) {
            return self::create($request, $request->channelId);
        }

        $editableChunkStoreId->update(
            [
                'chunkStoreId' => $request->chunkStoreId
            ]
        );

        // update h264 a h265 výstupy 
        UnicastOutputForDeviceController::check_if_exest_before_generate($request);

        BroadcastController::broadcast_notification_when_user_change_something(Auth::user()->name, "upravil chunk store id", $request->channelName);
        return self::frontend_notification("success", "success", "Upraveno!");
    }


    public static function delete($channelId): void
    {
        if ($data = UnicastChunkStoreId::where('channelId', $channelId)->first()) {
            $data->delete();
        }
    }
}
