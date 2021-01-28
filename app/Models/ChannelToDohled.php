<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ChannelToDohled extends Model
{
    use HasFactory;


    protected $fillable = [
        'channelId',
        'H264Id',
        'H265Id',
        'dohledId'
    ];
}
