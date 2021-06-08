<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Device extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'category',
        'vendor',
        'ip',
        'login_user',
        'login_password',
        'status',
        'sablona',
        'haveInterface',
        'controller_ip'
    ];
}
