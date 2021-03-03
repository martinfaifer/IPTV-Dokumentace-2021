<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StreamPort extends Model
{
    use HasFactory;

    protected $fillable = [
        'port_nuber',
        'port_output'
    ];
}
