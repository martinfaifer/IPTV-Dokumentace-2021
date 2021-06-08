<?php

namespace App\Http\Controllers;

use App\Models\Channel;
use App\Models\Device;
use App\Models\DeviceCategory;
use App\Models\H264;
use App\Models\H265;
use App\Models\Multicast;
use App\Models\ParedTag;
use App\Models\Tag;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use App\Traits\NotificationTrait;
use Illuminate\Support\Facades\Validator;

class TagController extends Controller
{
    use NotificationTrait;

    public static function get_tags(): array
    {
        if (!Tag::first()) {
            return [
                'status' => "empty"
            ];
        }

        return [
            'status' => "success",
            'tags' => Tag::all()
        ];
    }

    public function return_only_no_system_tags(): array
    {
        if (!Tag::where('system', null)->first()) {
            return [
                'status' => "empty"
            ];
        }

        return [
            'status' => "success",
            'tags' => Tag::where('system', null)->get()
        ];
    }

    public function return_tags(Request $request): array
    {
        switch ($request->datatype) {
            case 'multicastId':
                $column = "multicastId";
                break;

            case 'h264Id':
                $column = "h264Id";
                break;

            case 'h265Id':
                $column = "h265Id";
                break;

            case 'deviceId':
                $column = "deviceId";
                break;

            default:
                return [];
        }

        if (!ParedTag::where($column, $request->id)->first()) {
            return [];
        }


        foreach (ParedTag::where($column, $request->id)->get() as $tag) {
            $tagdata = Tag::where('id', $tag->tagId)->first();
            $output[] = array(
                'id' => $tag->id,
                'color' => $tagdata->color,
                'tagName' => $tagdata->tagName
            );
        }

        return $output;
    }

    /**
     * vytvoření nového stitku
     *
     * @param Request $request
     * @return array
     */
    public function create(Request $request): array
    {
        if (is_null($request->tagName) || empty($request->tagName) || is_null($request->tagColor) || empty($request->tagColor)) {
            return $this->frontend_notification("error", "error", "Musí být vše vyplněné!");
        }

        Tag::create(
            [
                'tagName' => $request->tagName,
                'color' => $request->tagColor["hex"]
            ]
        );

        return $this->frontend_notification("success", "success", "Vytvořeno!");
    }


    public function update(Request $request): array
    {
        if (!Tag::find($request->tagId)) {
            return $this->frontend_notification("error", "error", "Neexistuje štítek!");
        }

        $tag = Tag::find($request->tagId);

        if (!is_null($tag->system)) {
            return $this->frontend_notification("error", "error", "Systémové štítky nelze editovat!");
        }

        if (isset($request->tagColor["hex"])) {
            $color = $request->tagColor["hex"];
        } else {
            $color = $request->tagColor;
        }

        $tag->update(
            [
                'tagName' => $request->tagName,
                'color' => $color
            ]
        );

        return $this->frontend_notification("success", "success", "Vytvořeno!");
    }


    public function delete(Request $request): array
    {
        // vyhledání existence,
        if (!Tag::find($request->tagId)) {
            return $this->frontend_notification("error", "error", "Neexistuje štítek!");
        }

        $tag = Tag::find($request->tagId);

        if (!is_null($tag->system)) {
            return $this->frontend_notification("error", "error", "Systémové štítky nelze mazat!");
        }

        // vyhedání zda není někde zalozen a odstraní se 
        if (ParedTag::where('tagId', $request->tagId)->first()) {

            // odebrání vazeb
            foreach (ParedTag::where('tagId', $request->tagId)->get() as $paredtag) {
                $paredtag->delete();
            }
        }

        $tag->delete();

        return $this->frontend_notification("success", "success", "Odebráno!");
    }


    public function add_tag(Request $request): array
    {

        $validation = Validator::make($request->all(), [
            'tagId' => 'required',
            'type' => 'required',
        ]);

        if ($validation->fails()) {
            return $this->frontend_notification("error", "error", "Akce selhala!");
        }

        try {
            if (!Tag::find($request->tagId)) {
                return $this->frontend_notification("error", "error", "Neexistuje štítek!");
            }


            switch ($request->type) {
                case 'multicast':
                    $column = "multicastId";
                    break;
                case 'h264':
                    $column = "h264Id";

                    if ($request->tagId === 18) {
                        $createAutoReboot = ChannelAutoRebootController::store($request);
                        if ($createAutoReboot["status"] === "error") {
                            return $createAutoReboot;
                        }
                    }

                    break;

                case 'h265':
                    $column = "h265Id";

                    if ($request->tagId === 18) {
                        $createAutoReboot = ChannelAutoRebootController::store($request);
                        if ($createAutoReboot["status"] === "error") {
                            return $createAutoReboot;
                        }
                    }

                    break;

                case 'device':
                    $column = "deviceId";
                    break;
            }

            ParedTag::create([
                'tagId' => $request->tagId,
                $column => $request->id
            ]);

            return $this->frontend_notification("success", "success", "Přidáno!");
        } catch (\Throwable $th) {
            return $this->frontend_notification("error", "warning", "K tomuto tabu nelze přidat štítek!");
        }
    }


    public function remove_tag_from(Request $request): array
    {

        if (!$tag = ParedTag::find($request->tagId)) {
            return $this->frontend_notification("error", "error", "Neexistuje štítek!");
        }
        // admin může mazat systémové stitky
        if (!is_null(Tag::find($tag->tagId)->system) && Auth::user()->user_role != "admin") {
            return $this->frontend_notification("error", "error", "Systémové štítky nelze mazat!");
        }

        if ($tag->tagId === '18') {
            if (!is_null($tag->h264Id)) {
                ChannelAutoRebootController::destroy("h264", $tag->h264Id);
            }

            if (!is_null($tag->h265Id)) {
                ChannelAutoRebootController::destroy("h265", $tag->h265Id);
            }
        }

        $tag->delete();

        return $this->frontend_notification("success", "success", "Oderáno!");
    }



    public static function get_tagName_result($tagName)
    {

        $tag = Tag::where('tagName', $tagName)->first();

        if (!ParedTag::where('tagId', $tag->id)->first()) {
            return [];
        }

        foreach (ParedTag::where('tagId', $tag->id)->get() as $tagData) {

            if (!is_null($tagData->deviceId)) {
                // vyhledání zařízení
                $device = Device::find($tagData->deviceId);
                $filteredOutput[] = array(
                    'id' => "device" . uniqid(),
                    'img' => "false",
                    'icon' => DeviceCategory::find($device->category)->icon,
                    'name' => $device->name,
                    'url' => '/device/' . $device->id
                );

                unset($device);
            }

            if (!is_null($tagData->multicastId)) {
                //  vyhledání kanálu, dle multicastu
                $channel = Channel::where('id', $tagData->multicastId)->first();

                if (isset($channel->nazev)) {
                    $filteredOutput[] = array(
                        'id' => 'multicast' . uniqid(),
                        'img' => $channel->logo,
                        'icon' => "false",
                        'name' => $channel->nazev,
                        'url' => '/channel/' . $channel->id
                    );
                }

                unset($channel);
            }

            if (!is_null($tagData->h264Id)) {
                // vyhledání dle H264
                $channel = Channel::where('id', $tagData->h264Id)->first();

                $filteredOutput[] = array(
                    'id' => 'h264' . uniqid(),
                    'img' => $channel->logo,
                    'icon' => "false",
                    'name' => $channel->nazev,
                    'url' => '/channel/' . $channel->id . '/h264'
                );

                unset($channel);
            }

            if (!is_null($tagData->h265Id)) {
                // vyhledání dle H265
                $channel = Channel::where('id', $tagData->h265Id)->first();

                $filteredOutput[] = array(
                    'id' => 'h265' . uniqid(),
                    'img' => $channel->logo,
                    'icon' => "false",
                    'name' => $channel->nazev,
                    'url' => '/channel/' . $channel->id . '/h265'
                );

                unset($channel);
            }
        }

        return $filteredOutput;
    }

    /**
     * výpis dat dle štítku
     *
     * @param string $tagId
     * @return array
     */
    public static function show_by_tag($tagName): array
    {
        if (Str::contains($tagName, ',')) {

            $tagNames = explode(",", $tagName);

            foreach ($tagNames as $singleTagName) {
                $output[] = self::get_tagName_result($singleTagName);
            }

            if (count($output) >= 2) {
                $output = Arr::collapse($output);
            }

            return $output;
        } else {
            return self::get_tagName_result($tagName);
        }
    }
}
