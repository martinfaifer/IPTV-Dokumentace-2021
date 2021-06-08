<?php

namespace App\Http\Controllers;

use App\Models\Topics;
use App\Models\Wiki;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Traits\NotificationTrait;
use Illuminate\Support\Facades\Validator;

class WikiController extends Controller
{
    use NotificationTrait;
    /**
     * pole pro výpis všech potomků
     *
     * @var array
     */
    public $children = [];

    public function index(): mixed
    {
        foreach ($this->get_categories() as $category) {
            $output[] = array(
                'id' => $category->id,
                'category' => $category->main_kategorie,
                'icon' => $category->icon,
                'topics' => Topics::where('wiki_id', $category->id)->get(['id', 'topic_title', 'icon'])
            );
        }

        return $output;
    }


    public function show_topic(Request $request): array
    {
        if (!$topic = Topics::find($request->topicId)) {
            return [
                'status' => "error",
                'text' => ""
            ];
        }

        return [
            'status' => "success",
            'text' => $topic->text,
            'topic_title' => $topic->topic_title,
            'icon' => $topic->icon
        ];
    }

    public function show_category(Request $request)
    {
        return Wiki::findOrFail($request->id);
    }

    public function create_category(Request $request): array
    {
        $validation = Validator::make($request->all(), [
            'kategorie' => 'required',
            'icon' => 'required'
        ]);

        if ($validation->fails()) {
            return $this->frontend_notification('error', 'error', 'Není vše vyplněno!');
        }

        try {
            Wiki::create([
                'main_kategorie' => $request->kategorie,
                'icon' => $request->icon
            ]);

            return $this->frontend_notification("success", "success", "vytvořeno");
        } catch (\Throwable $th) {
            return $this->frontend_notification();
        }
    }

    public function create_topic(Request $request): array
    {
        $validation = Validator::make($request->all(), [
            'id' => 'required',
            'topic' => ['required'],
            'topic_title' => ['required'],
        ]);

        if ($validation->fails()) {
            return $this->frontend_notification('error', 'error', 'Není vše vyplněno');
        }
        // oevrení zda exituje kategorie
        if (!Wiki::where('id', $request->id)->first()) {
            return $this->frontend_notification("error", "error", "Neexistuje kategorie");
        }

        Topics::create([
            'text' => $request->topic,
            'kategorieId' => 0,
            'topic_title' => $request->topic_title,
            'creator' => Auth::user()->email,
            'wiki_id' => $request->id,
            'icon' => $request->new_icon
        ]);

        return $this->frontend_notification("success", "success", "Vytvořeno");
    }

    public function update_category(Request $request): array
    {
        $validation = Validator::make($request->all(), [
            'id' => 'required',
            'kategorie' => ['required'],
        ]);

        if ($validation->fails()) {
            return $this->frontend_notification('error', 'error', 'Není vše vyplněno');
        }

        if (!Wiki::where('id', $request->id)->first()) {
            return $this->frontend_notification("error", "error", "Neexistuje kategorie");
        }

        if (is_null($request->new_icon)) {
            $icon = $request->icon;
        } else {
            $icon = $request->new_icon;
        }

        Wiki::find($request->id)->update([
            'main_kategorie' => $request->kategorie,
            'icon' => $icon
        ]);

        return $this->frontend_notification("success", "success", "Upraveno!");
    }


    public function update_topic(Request $request): array
    {
        if (!$topic = Topics::find($request->topicId)) {
            return $this->frontend_notification("error", "error", "Neexistující článek");
        }

        if (isset($request->special)) {

            $topic->update(
                [
                    'text' => $request->topic,
                ]
            );

            return $this->frontend_notification("success", "success", "Článek byl upraven");
        }

        if ($request->text === '') {
            return $this->frontend_notification("error", "error", "Obsah musí být vyplněn");
        }

        if ($request->topic_title === '') {
            return $this->frontend_notification("error", "error", "Není vyplněn titulek");
        }

        if (is_null($request->new_icon)) {
            $icon = $request->icon;
        } else {
            $icon = $request->new_icon;
        }

        $topic->update(
            [
                'topic_title' => $request->topic_title,
                'text' => $request->topic,
                'icon' => $icon
            ]
        );

        return $this->frontend_notification("success", "success", "Článek byl upraven");
    }


    public function delete_category(Request $request): array
    {
        if (!$category = Wiki::where('id', $request->id)->first()) {
            return $this->frontend_notification("error", "error", "Neexistuje kategorie");
        }

        if (Topics::where('wiki_id', $request->id)->first()) {
            return $this->frontend_notification("error", "error", "Existují zde články");
        }

        $category->delete();

        return $this->frontend_notification("success", "success", "Odebráno");
    }

    public function delete_topic(Request $request): array
    {
        try {
            Topics::find($request->topicId)->delete();
            return $this->frontend_notification("success", "success", "Smazáno");
        } catch (\Throwable $th) {
            return $this->frontend_notification();
        }
    }

    /**
     * výpis hlavních kategorií
     *
     * @return object
     */
    protected function get_categories(): object
    {
        return Wiki::where('main_kategorie', "!=", null)->get(['id', 'main_kategorie', 'icon']);
    }
}
