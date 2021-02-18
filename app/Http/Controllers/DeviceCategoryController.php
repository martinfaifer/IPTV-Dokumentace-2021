<?php

namespace App\Http\Controllers;

use App\Models\DeviceCategory;

class DeviceCategoryController extends Controller
{

    public function return_device_category(): array
    {
        if (!DeviceCategory::first()) {
            return [
                'status' => "empty"
            ];
        }


        return [
            'status' => "success",
            'data' => DeviceCategory::get(['name', 'id', 'icon'])
        ];
    }


    public static function find_category_by_type_and_return_id(string $categoryType): string
    {
        if (!DeviceCategory::where('type', $categoryType)->first()) {
            return "0";
        }

        return DeviceCategory::where('type', $categoryType)->first()->id;
    }


    public static function return_categories_without_multiplexor(): array
    {
        if (!DeviceCategory::where('type', "!=", "multiplexor")->first()) {
            return [];
        }

        return DeviceCategory::where('type', "!=", "multiplexor")->get(['id', 'name'])->toArray();
    }


    /**
     * fn pro vyhledání informací o kategorii 
     *
     * @param string $categoryId
     * @return array name, type
     */
    public static function return_device_category_info(string $categoryId): array
    {
        if (!DeviceCategory::where('id', $categoryId)->first()) {
            return [];
        }

        return DeviceCategory::where('id', $categoryId)->get(['name', 'type'])->toArray();
    }


    /**
     * fn pro vrácení obecné informace o kategorii
     *
     * @param string $categoryType
     * @return string
     */
    public static function return_base_info_about_category(string $categoryType): string
    {

        return "";
    }
}
