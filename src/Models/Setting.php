<?php

namespace Rocketfirm\Rdrive\Models;

use Rocketfirm\Rdrive\Traits\Translatable;

/**
 * Rocketfirm\Rdrive\Models\Setting
 *
 * @property int $id
 * @property int $item_id
 * @property string $lang
 * @property string $group
 * @property string $key
 * @property string $name
 * @property string|null $value
 * @property string $type
 * @method static \Illuminate\Database\Eloquent\Builder|\Rocketfirm\Rdrive\Models\Setting item($itemId)
 * @method static \Illuminate\Database\Eloquent\Builder|\Rocketfirm\Rdrive\Models\Setting lang($lang)
 * @method static \Illuminate\Database\Eloquent\Builder|\Rocketfirm\Rdrive\Models\Setting newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\Rocketfirm\Rdrive\Models\Setting newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\Rocketfirm\Rdrive\Models\Setting query()
 * @method static \Illuminate\Database\Eloquent\Builder|\Rocketfirm\Rdrive\Models\Setting whereGroup($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Rocketfirm\Rdrive\Models\Setting whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Rocketfirm\Rdrive\Models\Setting whereItemId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Rocketfirm\Rdrive\Models\Setting whereKey($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Rocketfirm\Rdrive\Models\Setting whereLang($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Rocketfirm\Rdrive\Models\Setting whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Rocketfirm\Rdrive\Models\Setting whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Rocketfirm\Rdrive\Models\Setting whereValue($value)
 * @mixin \Eloquent
 */
class Setting extends RdriveBaseModel
{
    use Translatable;

    protected $guarded = [];

    public $timestamps = false;

    public $translatable = ['value'];

    public $schemaName = 'Настройки';

    public $displayInAdminSidebar = false;

    public $attributeLabels = [
        'item_id' => [
            'type' => 'primary',
            'sortable' => true,
            'filterable' => true,
            'showInList' => true
        ],
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
        'value' => [
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

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'item_id', 'lang', 'group', 'key', 'name', 'value', 'type'
    ];
}
