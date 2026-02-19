<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class BanalaiLibrary extends Model
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
    public function images()
    {
        return $this->hasMany(PageImage::class, 'page_id', 'id');
    }

      public function files()
    {
        return $this->hasMany(BanalaiLibraryFile::class, 'banalai_library_id', 'id');
    }
    
}
