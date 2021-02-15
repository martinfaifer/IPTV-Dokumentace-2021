<?php

namespace App\Http\Controllers;

use App\Models\ChannelAutoReboot;
use App\Models\ParedTag;
use App\Models\Tag;
use Illuminate\Http\Request;

class TagController extends Controller
{

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
            return [
                'status' => "error",
                'alert' => array(
                    'status' => "error",
                    'msg' => "Mesí být vše vyplněné"
                )
            ];
        }


        Tag::create(
            [
                'tagName' => $request->tagName,
                'color' => $request->tagColor["hex"]
            ]
        );

        return [
            'status' => "success",
            'alert' => array(
                'status' => "success",
                'msg' => "Štítek byl vytvořen"
            )
        ];
    }


    public function update(Request $request): array
    {
        if (!Tag::find($request->tagId)) {
            return [
                'status' => "error",
                'alert' => array(
                    'status' => "error",
                    'msg' => "Neexistuje štítek"
                )
            ];
        }

        $tag = Tag::find($request->tagId);

        if (!is_null($tag->system)) {
            return [
                'status' => "error",
                'alert' => array(
                    'status' => "error",
                    'msg' => "Systémové štítky nelze editovat"
                )
            ];
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

        return [
            'status' => "success",
            'alert' => array(
                'status' => "success",
                'msg' => "Štítek byl vytvořen"
            )
        ];
    }


    public function delete(Request $request): array
    {
        // vyhledání existence,
        if (!Tag::find($request->tagId)) {
            return [
                'status' => "error",
                'alert' => array(
                    'status' => "error",
                    'msg' => "Neexistuje štítek"
                )
            ];
        }

        $tag = Tag::find($request->tagId);

        if (!is_null($tag->system)) {
            return [
                'status' => "error",
                'alert' => array(
                    'status' => "error",
                    'msg' => "Systémové štítky nelze mazat"
                )
            ];
        }



        // vyhedání zda není někde zalozen a odstraní se 
        if ($thisParedTag = ParedTag::where('tagId', $request->tagId)->first()) {

            // odebrání vazeb
            foreach (ParedTag::where('tagId', $request->tagId)->get() as $paredtag) {
                $paredtag->delete();
            }
        }

        $tag->delete();

        // notifikace
        return [
            'status' => "success",
            'alert' => array(
                'status' => "success",
                'msg' => "Odstraněno"
            )
        ];
    }


    public function add_tag(Request $request): array
    {
        if (!Tag::find($request->tagId)) {
            return [
                'status' => "error",
                'alert' => array(
                    'status' => "error",
                    'msg' => "Neexistuje štítek"
                )
            ];
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

        return [
            'status' => "success",
            'alert' => array(
                'status' => "success",
                'msg' => "Štítek byl přidán"
            )
        ];
    }


    public function remove_tag_from(Request $request): array
    {
        if (!$tag = ParedTag::find($request->tagId)) {
            return [
                'status' => "error",
                'alert' => array(
                    'status' => "error",
                    'msg' => "Neexistuje štítek"
                )
            ];
        }

        if (!is_null(Tag::find($tag->tagId)->system)) {
            return [
                'status' => "error",
                'alert' => array(
                    'status' => "error",
                    'msg' => "Systémové štítky nelze mazat"
                )
            ];
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

        return [
            'status' => "success",
            'alert' => array(
                'status' => "success",
                'msg' => "Oderáno"
            )
        ];
    }
}
