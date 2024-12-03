<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Work extends Model
{
    use HasFactory;

    protected $fillable = [
        'url',
        'image_png',
        'image_webp',
        'alt',
        'comment',
        'hearing',
        'design',
        'coding',
        'domain',
        'server_upload',
        'aftercare',
    ];
}
