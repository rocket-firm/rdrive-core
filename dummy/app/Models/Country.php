<?php

namespace App\Models;

use Astrotomic\Translatable\Translatable;
use Rocketfirm\Rdrive\Models\RdriveBaseModel;
use Spatie\EloquentSortable\Sortable;
use Spatie\EloquentSortable\SortableTrait;

class Country extends RdriveBaseModel implements Sortable
{
    use Translatable, SortableTrait;

    public $translatedAttributes = ['name'];

    protected $fillable = ['code'];

    public $attributeLabels = [
        'code' => [
            'type' => 'string',
            'sortable' => true,
            'filterable' => true,
            'showInList' => true
        ],
        'name' => [
            'type' => 'string',
            'sortable' => true,
            'filterable' => true,
            'showInList' => true
        ]
    ];
}
