<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StreamerAndPortBound extends Model
{
    use HasFactory;

    protected $fillable = [
        'streamer_id', 'stream_port_id', 'used_for', 'ctypes_mobile', 'ctypes_stb', 'ctypes_stb_h265', 'ctypes_screenshoter', 'ctypes_samsung_tv', 'ctypes_android_tv', 'ctypes_pc', 'ottstring'
    ];

    public function streamer()
    {
        return $this->belongsTo(Streamer::class);
    }


    public function stream_port()
    {
        return $this->belongsTo(StreamPort::class);
    }
}
