<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

use App\Traits\NotificationTrait;

class NoteController extends Controller
{

    use NotificationTrait;

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
        $validation = Validator::make($request->all(), [
            'note' => ['required'],
            'id' => ['required'],
        ]);

        if ($validation->fails()) {
            return $this->frontend_notification("error", "error", "Nepodařilo se založit poznámku");
        }

        Note::create(
            [
                'poznamka' => $request->note,
                'channelId' => $request->id,
                'creator' => Auth::user()->email
            ]
        );

        return $this->frontend_notification("success", "success", "Poznámka vytvořena");
    }


    public function delete(Request $request): array
    {
        if (!$note = Note::find($request->noteId)) {
            $this->frontend_notification("error", "error", "Poznmka neexistuje!");
        }
        $note->delete();

        return $this->frontend_notification("success", "success", "Poznámka odebrána");
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
                'creator' => $note->creator,
                'created_at' => $note->created_at
            );
        }

        return [
            'status' => "success",
            'notes' => $output
        ];
    }
}
