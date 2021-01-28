<?php

namespace App\Http\Controllers;

use App\Models\ChannelToDohled;
use App\Models\ParedTag;
use Illuminate\Http\Request;

class ParedTagController extends Controller
{
    /**
     * column deviceId, multicastId, h264Id, h265Id, tagId
     *
     * @param string $column
     * @param string $itemId
     * @return void
     */
    public static function delete_tags(string $column, string $itemId): void
    {

        if (ParedTag::where($column, $itemId)->first()) {
            foreach (ParedTag::where($column, $itemId)->get() as $tag) {
                ParedTag::where('id', $tag['id'])->first()->delete();
            }
        }
    }


    public static function add_tag_to_channel_if_is_in_dohled(): void
    {
        if (ChannelToDohled::first()) {

            foreach (ChannelToDohled::get() as $channel) {
                // vezme se channelId a přidá se do paredTags, kde nesmí existovat jiz vazba channelId a tagId , pro vyplnění se pouzije tagId 1 
                if (!ParedTag::where('multicastId', $channel->channelId)->where('tagId', 1)->first()) {
                    ParedTag::create(
                        [
                            'multicastId' => $channel->channelId,
                            'tagId' => 1
                        ]
                    );
                }
            }
        }
    }
}
