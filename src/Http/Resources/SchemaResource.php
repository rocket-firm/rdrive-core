<?php

namespace Rocketfirm\Rdrive\Http\Resources;

use Astrotomic\Translatable\Translatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Resources\Json\Resource;

class SchemaResource extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        $attributeLabels = [];
        $tableName = $this->getTable();
        $schemaName = 'Example';

        if (isset($this->table)) {
            $tableName = $this->table;
        }

        if (isset($this->attributeLabels) || is_array($this->attributeLabels)) {
            $attributeLabels = $this->attributeLabels;
        }

        if (isset($this->schemaName)) {
            $schemaName = $this->schemaName;
        }

        $fields = [];

        foreach($attributeLabels as $key => $value) {
            $attributes = [
                'key' => $key,
                'name' => !empty($value['label']) ? $value['label'] : 'name',
                'type' => !empty($value['type']) ? $value['type'] : 'string',
                'sortable' => !empty($value['sortable']) ? $value['sortable'] : false,
                'filterable' => !empty($value['filterable']) ? $value['filterable'] : false,
                'editable' => isset($value['editable']) ? $value['editable'] : true,
                'showInList' => isset($value['showInList']) ? $value['showInList'] : false,
                'translatable' => false,
            ];
            if (!empty($value['foreign_model'])) {
                $attributes['foreign_model'] = $value['foreign_model'];
            }
            if (!empty($value['foreign_model_search_field'])) {
                $attributes['foreign_model_search_field'] = $value['foreign_model_search_field'];
            }
            if (!empty($value['foreign_model_value_field'])) {
                $attributes['foreign_model_value_field'] = $value['foreign_model_value_field'];
            }
            if (!empty($value['show_preview'])) {
                $attributes['show_preview'] = $value['show_preview'];
            }
            if (!empty($value['allow_create'])) {
                $attributes['allow_create'] = $value['allow_create'];
            }
            if (!empty($value['options'])) {
                $attributes['options'] = $value['options'];
            }

            if (isset($this->translatedAttributes) && in_array($key, $this->translatedAttributes)) {
                $attributes['translatable'] = true;
            }

            $fields[] = $attributes;
        }

        $isTranslatable = in_array(Translatable::class, class_uses($this->resource));

        return [
            $tableName => [
                'name' => $schemaName,
                'fields' => $fields,
                'display_in_admin_sidebar' => isset($this->displayInAdminSidebar) ? $this->displayInAdminSidebar : true,
                'translatable' => $isTranslatable,
                'sortable' => isset($this->sortable) ? $this->sortable : false,
                'creatable' => isset($this->creatable) ? $this->creatable : true,
            ]
        ];
    }
}
