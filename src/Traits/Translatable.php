<?php

namespace Rocketfirm\Rdrive\Traits;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\DB; 

trait Translatable
{
    /**
     * Scope a query to only include items of a given item_id.
     *
     * @param  \Illuminate\Database\Eloquent\Builder $query
     * @param  mixed $itemId
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeItem(Builder $query, $itemId)
    {
        return $query->where('item_id', $itemId);
    }

    /**
     * Scope a query to only include items of a given language.
     *
     * @param  \Illuminate\Database\Eloquent\Builder $query
     * @param  mixed $lang
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeLang(Builder $query, $lang)
    {
        return $query->where('lang', $lang);
    }

    public function save(array $options = [])
    {
        /**
         * @var Model $this
         */

        $isUpdate = $this->exists;
        if ($isUpdate) {
            $valuesForUpdate = array_diff_assoc($this->getAttributes(), $this->original);
            $fieldsForUpdate = array_keys($valuesForUpdate);
            $fieldsForUpdateNonTranslatable = array_diff($fieldsForUpdate, $this->translatable);
            if (count($fieldsForUpdateNonTranslatable)) {
                $valuesForUpdateNonTranslatable = array_intersect_key($valuesForUpdate, array_flip($fieldsForUpdateNonTranslatable));
                DB::table(!empty($this->table) ? $this->table : $this->getTable())
                    ->where('item_id', $this->item_id)
                    ->update($valuesForUpdateNonTranslatable);
            }
        } else {
            if (!isset($this->item_id)) {
                $this->item_id = self::getLastItemId() + 1;
            }
        }
        return parent::save($options);
    }

    public function createWithTranslations()
    {
        if (!$this->lang) {
            throw new \Error('Language not specified');
        }
        $allLanguages = config('rdrive.multilanguage.locales'); 
        $translationsLanguages = array_diff($allLanguages, [ $this->lang ]);
        $translations = array_map(function ($lang) {
            $translation = $this->replicate();
            $translation->lang = $lang;
            return $translation;
        }, $translationsLanguages);
        DB::beginTransaction();
        $this->save();
        foreach($translations as $translation) {
            $translation->item_id = $this->item_id; 
            $translation->save();
        }
        DB::commit();
    }

    public static function getLastItemId()
    {
        return self::max('item_id');
    }
}