<?php

namespace App\Http\Controllers;

use App\Models\Topics;
use App\Models\Wiki;
use Illuminate\Http\Request;

class WikiController extends Controller
{
    /**
     * pole pro výpis všech potomků
     *
     * @var array
     */
    public $children = [];


    /**
     * sestavení stromu
     *
     * @return array
     */
    public function get(): array
    {

        foreach ($this->get_main() as $main) {
            // $main -> id , main_kategorie

            // vyhledání, zda main má potomka / potomky
            if (Wiki::where('id_main_kategorie', $main->id)->first()) {
                $this->children = $this->get_children(Wiki::where('id_main_kategorie', $main->id)->get());
            }

            $tree[] = array(
                'id' => $main->id,
                'to' => $main->id,
                'name' => $main->main_kategorie,
                'children' => $this->children
            );
        }

        return $tree;
    }

    /**
     * výpis hlavních kategorií
     *
     * @return object
     */
    public function get_main(): object
    {
        return Wiki::where('main_kategorie', "!=", null)->get(['id', 'main_kategorie']);
    }

    /**
     * vyhledání potomku vázaných na main kategorii
     *
     * @param object $childrenArray
     * @return array
     */
    public function get_children(object $childrenArray)
    {
        if (empty($childrenArray) || !$childrenArray) {
            return [];
        } else {

            foreach ($childrenArray as $children) {
                $output[] = array(
                    'id' => $children->id,
                    'to' => $children->id,
                    'name' => $children->sub_kategorie,
                    'children' => $this->find_sub_child_by_id($children->id)
                );
            }

            return $output;
        }
    }


    /**
     * vyhledá všdchny potomky
     *
     * @param string $childId
     * @return array
     */
    public function find_sub_child_by_id(string $childId)
    {
        if (!Wiki::where('id_main_kategorie', $childId)->first()) {
            return [];
        }

        foreach (Wiki::where('id_main_kategorie', $childId)->get() as $children) {
            $output[] = array(
                'id' => $children->id,
                'to' => $children->id,
                'name' => $children->sub_kategorie,
                'children' => $this->find_sub_child_by_id($children->id)
            );
        }

        return $output;
    }


    public function get_topic(Request $request): array
    {

        if (!$topic = Topics::where('kategorieId', $request->topicId)->first()) {
            return [
                'status' => "error",
                'text' => ""
            ];
        }

        return [
            'status' => "success",
            'text' => $topic->text
        ];
    }


    public function update_topic(Request $request): array
    {
        if (!$topic = Topics::where('kategorieId', $request->topicId)->first()) {
            return [
                'status' => "error",
                'alert' => array(
                    'status' => "error",
                    'msg' => "Neexistující článek"
                )
            ];
        }

        $topic->update(
            [
                'text' => $request->topic
            ]
        );

        return [
            'status' => "success",
            'alert' => array(
                'status' => "success",
                'msg' => "Článek byl upraven"
            )
        ];
    }
}
