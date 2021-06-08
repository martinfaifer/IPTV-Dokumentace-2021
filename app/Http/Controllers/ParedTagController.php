<?php

namespace App\Http\Controllers;

use App\Models\ChannelToDohled;
use App\Models\H264;
use App\Models\H265;
use App\Models\ParedTag;

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

            foreach (ChannelToDohled::all() as $channel) {
                // vezme se channelId a přidá se do paredTags, kde nesmí existovat jiz vazba channelId a tagId , pro vyplnění se pouzije tagId 1 
                if (!ParedTag::where('multicastId', $channel->channelId)->where('tagId', 1)->first()) {
                    ParedTag::create(
                        [
                            'multicastId' => $channel->channelId,
                            'tagId' => 1
                        ]
                    );
                }

                if ($h264 = H264::where('id', $channel->H264Id)->first()) {
                    if (!ParedTag::where('h264Id', $h264->channelId)->where('tagId', 1)->first()) {
                        ParedTag::create(
                            [
                                'h264Id' => $h264->channelId,
                                'tagId' => 1
                            ]
                        );
                    }
                }
                // h265
                if ($h265 = H265::where('id', $channel->H265Id)->first()) {
                    if (!ParedTag::where('h265Id', $h265->channelId)->where('tagId', 1)->first()) {
                        ParedTag::create(
                            [
                                'h265Id' => $h265->channelId,
                                'tagId' => 1
                            ]
                        );
                    }
                }
            }
        }
    }
}
