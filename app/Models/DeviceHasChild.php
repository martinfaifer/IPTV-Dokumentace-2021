<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DeviceHasChild extends Model
{
    use HasFactory;

    protected $fillable = [
        'channelId',
        'device_parent',
        'device_child'
    ];
}
