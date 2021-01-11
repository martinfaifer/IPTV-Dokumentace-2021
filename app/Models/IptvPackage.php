<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class IptvPackage extends Model
{
    use HasFactory;

    protected $fillable = [
        'main_package',
        'sub_package'
    ];
}
