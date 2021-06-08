<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NanguIsp extends Model
{
    use HasFactory;

    protected $fillable = [
        'isp_code',
        'isp_name'
    ];
}
