<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LinuxPath extends Model
{
    use HasFactory;

    protected $fillable = [
        'channelId',
        'path',
        'deviceId',
    ];
}
