<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ctype extends Model
{
    use HasFactory;

    protected $fillable = [
        'ctype_id', 'kodek', 'resolution', 'bitrate', 'description'
    ];
}
