<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PowerVuInterface extends Model
{
    use HasFactory;
    protected $fillable = [
        'deviceId',
        'dvb',
        'sat',
        'freq',
        'fec',
        'symbolRate',
        'pol',
        'ASI'
    ];
}
