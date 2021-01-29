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


    public function create(Request $request): array
    {
        if (
            is_null($request->note) || empty($request->note) ||
            is_null($request->id) || empty($request->id)
        ) {
            return [
                'status' => "error",
                'alert' => array(
                    'status' => "error",
                    'msg' => "Nepodařilo se založit poznámku"
                )
            ];
        }

        Note::create(
            [
                'poznamka' => $request->note,
                'channelId' => $request->id
            ]
        );

        return [
            'status' => "success",
            'alert' => array(
                'status' => "success",
                'msg' => "Poznámka vytvořena"
            )
        ];
    }


    public function delete(Request $request): array
    {
        if (!$note = Note::find($request->noteId)) {
            return [
                'status' => "error",
                'alert' => array(
                    'status' => "error",
                    'msg' => "Poznámka neexistuje"
                )
            ];
        }
        $note->delete();

        return [
            'status' => "success",
            'alert' => array(
                'status' => "success",
                'msg' => "Poznámka odebrána"
            )
        ];
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
