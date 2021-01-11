<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Multicast extends Model
{
    use HasFactory;

    protected $fillable = [
        'channelId',
        'stb_ip',
        'multicast_ip',
        'zdrojId',
        'isBackup',
        'multiplexerId',
        'deviceId',
        'deviceInterface'
    ];
}
