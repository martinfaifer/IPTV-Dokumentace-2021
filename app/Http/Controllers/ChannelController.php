<?php

namespace App\Http\Controllers;

use App\Models\Channel;
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
}
