<?php

namespace Rocketfirm\Rdrive\Models;

class Setting extends RdriveBaseModel
{
    protected $guarded = [];

    public $timestamps = false;

    public $schemaName = 'Настройки';

    public $displayInAdminSidebar = false;

    public $attributeLabels = [
        'group' => [
            'type' => 'string',
            'sortable' => true,
            'filterable' => true,
            'showInList' => true
        ],
        'key' => [
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
        ],
        'type' => [
            'type' => 'string',
            'sortable' => true,
            'filterable' => true,
            'showInList' => true
        ],
    ];
}
