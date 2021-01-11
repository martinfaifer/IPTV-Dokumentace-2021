<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UnicastKvality extends Model
{
    use HasFactory;
    protected $fillable = [
        'kvalita',
        'format'
    ];
}
