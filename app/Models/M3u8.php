<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class M3u8 extends Model
{
    use HasFactory;

    protected $fillable = [
        'h264id',
        'h265id',
        'kdekoliv',
        'local',
        'mobile'
    ];
}
