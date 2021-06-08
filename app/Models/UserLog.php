<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserLog extends Model
{
    use HasFactory;

    protected $fillable = [
        'email', 'multicastId', 'h264Id', 'h265Id', 'deviceId', 'original', 'new'
    ];
}
