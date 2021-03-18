<?php

namespace App\Http\Controllers;

use App\Models\UnicastChunkStoreId;
use Illuminate\Http\Request;

class UnicastChunkStoreIdController extends Controller
{



    public static function create(Request $request, $channelId)
    {

        if (UnicastChunkStoreId::where('channelId', $request->channelId)->first()) {
            // nic nedelat
        } else {
            UnicastChunkStoreId::create([
                'channelId' => $channelId,
                'chunkStoreId' => $request->chunkStoreId
            ]);
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
        if (!UnicastChunkStoreId::where('channelId', $request->channelId)->first()) {
            return NotificationController::notify("error", "error", "Neexistuje kanál s vazbou na chunk store ID!");
        }

        UnicastChunkStoreId::where('channelId', $request->channelId)->update(
            [
                'chunkStoreId' => $request->chunkStoreId
            ]
        );

        // update h264 a h265 výstupy 
        UnicastOutputForDeviceController::check_if_exest_before_generate($request);

        return NotificationController::notify("success", "success", "Kanál byl upraven!");
    }


    public static function delete($channelId): void
    {
        if ($data = UnicastChunkStoreId::where('channelId', $channelId)->first()) {
            $data->delete();
        }
    }
}
