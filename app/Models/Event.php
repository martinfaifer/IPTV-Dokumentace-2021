<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    protected $fillable = [
        'start_day',
        'start_time',
        'end_day',
        'end_time',
        'repeat_every_day',
        'multicastId',
        'h264Id',
        'h265Id',
        'note'
    ];
}
