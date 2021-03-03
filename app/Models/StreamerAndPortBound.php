<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StreamerAndPortBound extends Model
{
    use HasFactory;

    protected $fillable = [
        'streamer_id',
        'stream_port_id',
        'used_for'
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
