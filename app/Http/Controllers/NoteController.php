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



    public function return_notes(Request $request): array
    {
        // $request->id
        // $request->dataType 
        switch ($request->datatype) {
            case 'channelId':
                $column = "channelId";
                break;

            case 'deviceId':
                $column = "deviceId";
                break;

            default:
                return [
                    'status' => "error"
                ];
        }

        if (!Note::where($column, $request->id)->first()) {
            return ['status' => "error"];
        }

        foreach (Note::where($column, $request->id)->get() as $note) {
            $output[] = array(
                'id' => $note->id,
                'poznamka' => $note->poznamka,
            );
        }

        return [
            'status' => "success",
            'notes' => $output
        ];
    }
}
