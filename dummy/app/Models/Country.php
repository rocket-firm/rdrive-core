<?php

namespace App\Models;

use Dimsav\Translatable\Translatable;
use Illuminate\Database\Eloquent\Model;
use Spatie\EloquentSortable\Sortable;
use Spatie\EloquentSortable\SortableTrait;

class Country extends Model implements Sortable
{
    use Translatable, SortableTrait;

    public $translatedAttributes = ['name'];

    protected $fillable = ['code'];
}
