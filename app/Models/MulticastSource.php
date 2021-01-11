<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MulticastSource extends Model
{
    use HasFactory;
    protected $fillable = [
        'zdroj',
    ];
}
