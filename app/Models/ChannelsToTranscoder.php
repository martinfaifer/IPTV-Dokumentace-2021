<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ChannelsToTranscoder extends Model
{
    use HasFactory;

    protected $fillable = [
        'H264Id',
        'H265Id',
        'transcoderId'
    ];
}
