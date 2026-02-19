<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Video extends Model
{
    use SoftDeletes;
    protected $guarded = [];

    public function created_user()
    {
        return $this->belongsTo(User::class, 'created_by', 'id');
    }
    public function updated_user()
    {
        return $this->belongsTo(User::class, 'updated_by', 'id');
    }
    public function category()
    {
        return $this->belongsTo(VideoCategory::class, 'category_code', 'code');
    }
    public function file_type()
    {
        return $this->belongsTo(Type::class, 'file_type_code', 'code');
    }
    public function images()
    {
        return $this->hasMany(VideoImage::class, 'video_id', 'id');
    }
    public function files()
    {
        return $this->hasMany(VideoFile::class, 'video_id', 'id');
    }
    // Scope
    public function scopePublished($query)
    {
        return $query->where('status', 'published');
    }
}
