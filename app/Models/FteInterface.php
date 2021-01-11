<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FteInterface extends Model
{
    use HasFactory;

    protected $fillable = [
        'deviceId',
        'dvb',
        'sat',
        'freq',
        'symbolRate',
        'polarizace',
        'fec',
        'CIA',
        'CIB'
    ];
}
