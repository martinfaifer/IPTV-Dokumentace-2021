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
}
