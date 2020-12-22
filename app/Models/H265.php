<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class H265 extends Model
{
    use HasFactory;

    protected $fillable = [
        'channelId',
        'ip',
        'deviceId',
        'status'
    ];
}
