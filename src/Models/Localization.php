<?php

namespace Rocketfirm\Rdrive\Models;

use Rocketfirm\Rdrive\Traits\Translatable;

/**
 * Rocketfirm\Rdrive\Models\Localization
 *
 * @property int $id
 * @property int $item_id
 * @property string $lang
 * @property string $group
 * @property string $key
 * @property string|null $value
 * @method static \Illuminate\Database\Eloquent\Builder|\Rocketfirm\Rdrive\Models\Localization item($itemId)
 * @method static \Illuminate\Database\Eloquent\Builder|\Rocketfirm\Rdrive\Models\Localization lang($lang)
 * @method static \Illuminate\Database\Eloquent\Builder|\Rocketfirm\Rdrive\Models\Localization newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\Rocketfirm\Rdrive\Models\Localization newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\Rocketfirm\Rdrive\Models\Localization query()
 * @method static \Illuminate\Database\Eloquent\Builder|\Rocketfirm\Rdrive\Models\Localization whereGroup($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Rocketfirm\Rdrive\Models\Localization whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Rocketfirm\Rdrive\Models\Localization whereItemId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Rocketfirm\Rdrive\Models\Localization whereKey($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Rocketfirm\Rdrive\Models\Localization whereLang($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Rocketfirm\Rdrive\Models\Localization whereValue($value)
 * @mixin \Eloquent
 */
class Localization extends RdriveBaseModel
{
    use Translatable;

    protected $guarded = [];

    public $timestamps = false;

    public $translatable = ['value'];

    public $attributeLabels = [
        'item_id' => [
            'label' => 'ID',
            'type' => 'primary',
            'sortable' => true,
            'filterable' => true,
            'showInList' => true,
        ],
        'group' => [
            'label' => 'Группа',
            'type' => 'string',
            'sortable' => true,
            'filterable' => true,
            'showInList' => true
        ],
        'key' => [
            'label' => 'Ключ',
            'type' => 'string',
            'sortable' => true,
            'filterable' => true,
            'showInList' => true
        ],
        'value' => [
            'label' => 'Значение',
            'type' => 'string',
            'sortable' => true,
            'filterable' => true,
            'showInList' => true
        ]
    ];
}
