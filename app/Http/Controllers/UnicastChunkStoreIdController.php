<?php

namespace App\Http\Controllers;

use App\Models\UnicastChunkStoreId;
use Illuminate\Http\Request;

class UnicastChunkStoreIdController extends Controller
{
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
            return [
                'status' => "error",
                'alert' => array(
                    'status' => "error",
                    'msg' => "Neexistuje kanál s vazbou na chunk store ID "
                )
            ];
        }

        UnicastChunkStoreId::where('channelId', $request->channelId)->update(
            [
                'chunkStoreId' => $request->chunkStoreId
            ]
        );

        return [
            'status' => "success",
            'alert' => array(
                'status' => "success",
                'msg' => "Kanál byl upraven"
            )
        ];
    }


    public static function delete($channelId): void
    {
        if ($data = UnicastChunkStoreId::where('channelId', $channelId)->first()) {
            $data->delete();
        }
    }
}
