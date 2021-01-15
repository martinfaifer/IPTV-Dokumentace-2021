<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Illuminate\Http\Request;

class NoteController extends Controller
{
    public static function delete_all_notes_by_channelId(string $channelId): void
    {
        if (Note::where('channelId', $channelId)->first()) {
            foreach (Note::where('channelId', $channelId)->get() as $noteToDelete) {
                Note::where('id', $noteToDelete['id'])->first()->delete();
            }
        }
    }


    public static function delete_all_notes_by_deviceId(string $deviceId): void
    {
        if (Note::where('deviceId', $deviceId)->first()) {
            foreach (Note::where('deviceId', $deviceId)->get() as $noteToDelete) {
                Note::where('id', $noteToDelete['id'])->first()->delete();
            }
        }
    }
}
