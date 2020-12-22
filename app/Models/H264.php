<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class H264 extends Model
{
    use HasFactory;

    protected $fillable = [
        'channelId',
        'ip',
        'deviceId',
        'status'
    ];
}
