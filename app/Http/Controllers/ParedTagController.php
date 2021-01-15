<?php

namespace App\Http\Controllers;

use App\Models\ParedTag;
use Illuminate\Http\Request;

class ParedTagController extends Controller
{
    /**
     * column deviceId, multicastId, h264Id, h265Id, tagId
     *
     * @param [type] $column
     * @param [type] $itemId
     * @return void
     */
    public static function delete_tags($column, $itemId): void
    {

        if (ParedTag::where($column, $itemId)->first()) {
            foreach (ParedTag::where($column, $itemId)->get() as $tag) {
                ParedTag::where('id', $tag['id'])->first()->delete();
            }
        }
    }
}
