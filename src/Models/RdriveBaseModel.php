<?php

namespace Rocketfirm\Rdrive\Models;

use Rocketfirm\Rdrive\Scopes\FilterScope;
use Illuminate\Database\Eloquent\Model;

class RdriveBaseModel extends Model
{
    public $schemaName;

    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);

        $this->schemaName = "{$this->getTable()}.{$this->getTable()}";

        if (isset($this->attributeLabels) && !empty($this->attributeLabels)) {
            foreach ($this->attributeLabels as $key => $value) {
                $this->attributeLabels[$key]['label'] = "{$this->getTable()}.{$key}";
            }
        }
    }

    protected static function boot()
    {
        parent::boot();

        static::addGlobalScope(new FilterScope());
    }
}
