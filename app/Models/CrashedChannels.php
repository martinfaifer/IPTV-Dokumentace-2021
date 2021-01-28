<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CrashedChannels extends Model
{
    use HasFactory;

    protected $fillable = [
        'multicastId',
        'h264',
        'h265',
        'reboot_one',
        'reboot_two',
        'sended_email_alert'
    ];
}
