<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DeviceCategory extends Model
{
    use HasFactory;

    // type => multiplexer, satelit, poIP, transcoder
    protected $fillable = [
        'name',
        'type'
    ];
}
