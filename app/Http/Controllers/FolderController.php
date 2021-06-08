<?php

namespace App\Http\Controllers;

use App\Jobs\SendFileNotification;
use App\Models\Channel;
use App\Models\Dokumenation;
use Illuminate\Http\Request;
use App\Traits\NotificationTrait;

class FolderController extends Controller
{
    use NotificationTrait;

    public $contentWithFullPath = array();

    public function scan_folder(string $contentType)
    {
        switch ($contentType) {
            case 'channelLogos':
                return $this->fill_full_path('storage/Channel_logos/', 'channel_logo');
                break;
            default:
                abort(404);
                break;
        }
    }

    public function fill_full_path(string $fullPath, $fileType): array
    {
        foreach (scandir(public_path($fullPath), 1) as $file_content) {

            $this->contentWithFullPath[] = array(
                'path' => $fullPath . $file_content,
                'file' => $file_content,
                'file_content' => $this->find_boundary($fileType, $fullPath . $file_content)
            );
        }
        return $this->contentWithFullPath;
    }

    public function find_boundary(string $fileType, string $filePath): array
    {
        switch ($fileType) {
            case 'channel_logo':
                return ($channel = Channel::where('logo', $filePath)->first())
                    ? array(
                        'id' => $channel->id,
                        'nazev' => $channel->nazev
                    )
                    : array(
                        'id' => null,
                        'nazev' => null
                    );
                break;

            default:
                return [
                    'id' => null,
                    'nazev' => null
                ];
                break;
        }
    }

    public function delete(Request $request)
    {

        if (is_null($request->path) || empty($request->path)) {
            return $this->frontend_notification("error", "error", "Akce nebyla úspěšná");
        }

        if (!file_exists($request->path)) {
            return $this->frontend_notification("error", "error", "Akce nebyla úspěšná");
        }

        try {
            unlink($request->path);
            return $this->frontend_notification("success", "success", "Odebráno!");
        } catch (\Throwable $th) {
            return $this->frontend_notification();
        }
    }


    public function add_file(Request $request): array
    {
        $file = $request->file('document');
        $name = '/Channel_docu/' . uniqid() . '.' . $file->extension();
        $file->storePubliclyAs('public', $name);

        // uložení do tabulky 
        Dokumenation::create(
            [
                'name' => $request->document->getClientOriginalName(),
                'path' => '/storage/' . $name,
                'channelId' => $request->channelId
            ]
        );


        // zaslání emailu pokud jsou vybráni lidé 
        if (!empty($request->usersToNotify) || !is_null($request->usersToNotify)) {
            $this->send_mail_after_is_file_store($request->usersToNotify, $request->textToSend);
        }


        return $this->frontend_notification("success", "success", "Uloženo");
    }


    public function return_files_belongsTo_channel(Request $request): array
    {
        return (Dokumenation::where('channelId', $request->channelId)->first())
            ? Dokumenation::where('channelId', $request->channelId)->get()->toArray()
            : array();
    }


    public function send_mail_after_is_file_store($mails, $text = null)
    {
        $mailsArr = explode(",", $mails);

        foreach ($mailsArr as $mail) {
            if (is_null($text) || empty($text)) {
                $text = "Byl nahrán nový soubor.";
            }
            new SendFileNotification($mail, $text);
        }
    }
}
