<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Wiki extends Model
{
    use HasFactory;

    protected $fillable = [
        'main_kategorie',
        'sub_kategorie',
        'id_main_kategorie'
    ];
}
