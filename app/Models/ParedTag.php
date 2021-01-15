<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ParedTag extends Model
{
    use HasFactory;

    protected $fillable = [
        'deviceId',
        'multicastId',
        'h264Id',
        'h265Id',
        'tagId'
    ];
}
