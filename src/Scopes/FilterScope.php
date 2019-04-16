<?php

namespace Rocketfirm\Rdrive\Scopes;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Scope;

class FilterScope implements Scope
{
    public function apply(Builder $builder, Model $model)
    {
        if (\request()->has('query') && !empty(\request('query'))) {
            $filterQuery = json_decode(\request('query'), true);

            if (isset($filterQuery['filter']) && !empty($filterQuery['filter'])) {
                foreach ($filterQuery['filter'] as $key => $operations) {
                    if (is_array($operations)) {
                        foreach ($operations as $sign => $value) {
                            if (\Schema::hasColumn($model->getTable(), $key)) {
                                $builder->where($key, $sign, $value);
                            }
                        }
                    }
                }
            }

            if (isset($filterQuery['sort']) && !empty($filterQuery['sort'])) {
                foreach ($filterQuery['sort'] as $field => $operand) {
                    if (\Schema::hasColumn($model->getTable(), $field)) {
                        $builder->orderBy($field, $operand);
                    }
                }
            }

            if (isset($filterQuery['limit']) && !empty($filterQuery['limit'])) {
                $builder->limit($filterQuery['limit']);
            }
        }
    }
}