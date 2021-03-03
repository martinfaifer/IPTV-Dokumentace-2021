<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UnicastOutputForDevice extends Model
{
    use HasFactory;

    protected $fillable = [
        'h264Id',
        'h265Id',
        'output'
    ];
}
