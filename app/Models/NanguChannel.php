<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NanguChannel extends Model
{
    use HasFactory;

    protected $fillable = [
        'channel_id',
        'nangu_channel_code'
    ];
}
