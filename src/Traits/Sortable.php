<?php

namespace Rocketfirm\Rdrive\Traits;

use ArrayAccess;
use Illuminate\Database\Eloquent\Model;
use InvalidArgumentException;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Support\Arr;

trait Sortable
{
    public static function bootSortable()
    {
        static::creating(function ($model) {
            if ($model instanceof Model && $model->shouldSortWhenCreating()) {
                $model->setHighestOrderNumber();
            }
        });
    }

    /**
     * Modify the order column value.
     */
    public function setHighestOrderNumber()
    {
        $orderColumnName = $this->determineOrderColumnName();

        if ($this->isTranslatable())  {
            $model = $this->item($this->item_id)->first();
            $this->$orderColumnName = is_null($model) ? $this->getHighestOrderNumber() + 1 : $model->{$orderColumnName};
        } else {
            $this->$orderColumnName = $this->getHighestOrderNumber() + 1;
        }
    }

    /**
     * Determine the order value for the new record.
     */
    public function getHighestOrderNumber(): int
    {
        return (int) $this->buildSortQuery()->max($this->determineOrderColumnName());
    }

    /**
     * Let's be nice and provide an ordered scope.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @param string $direction
     *
     * @return \Illuminate\Database\Query\Builder
     */
    public function scopeOrdered(Builder $query, string $direction = 'asc')
    {
        return $query->orderBy($this->determineOrderColumnName(), $direction);
    }

    /**
     * This function reorders the records: the record with the first id in the array
     * will get order 1, the record with the second it will get order 2, ...
     *
     * A starting order number can be optionally supplied (defaults to 1).
     *
     * @param array|\ArrayAccess $ids
     * @param int $startOrder
     */
    public static function setNewOrder($ids, int $startOrder = 1)
    {
        if (! is_array($ids) && ! $ids instanceof ArrayAccess) {
            throw new InvalidArgumentException('You must pass an array or ArrayAccess object to setNewOrder');
        }

        $model = new static;

        $orderColumnName = $model->determineOrderColumnName();
        $primaryKeyColumn = $model->getKeyName();

        foreach ($ids as $id) {
            static::withoutGlobalScope(SoftDeletingScope::class)
                ->where($primaryKeyColumn, $id)
                ->update([$orderColumnName => $startOrder++]);
        }
    }

    /*
     * Determine the column name of the order column.
     */
    protected function determineOrderColumnName(): string
    {
        if (
            isset($this->sortable['order_column_name']) &&
            ! empty($this->sortable['order_column_name'])
        ) {
            return $this->sortable['order_column_name'];
        }

        return 'position';
    }

    /**
     * Determine if the order column should be set when saving a new model instance.
     */
    public function shouldSortWhenCreating(): bool
    {
        return $this->sortable['sort_when_creating'] ?? true;
    }

    /**
     * Swaps the order of this model with the model 'below' this model.
     *
     * @return $this
     */
    public function moveOrderDown()
    {
        $orderColumnName = $this->determineOrderColumnName();

        $swapWithModel = $this->buildSortQuery()->limit(1)
            ->ordered()
            ->where($orderColumnName, '>', $this->$orderColumnName)
            ->first();

        if (! $swapWithModel) {
            return $this;
        }

        return $this->swapOrderWithModel($swapWithModel);
    }

    /**
     * Swaps the order of this model with the model 'above' this model.
     *
     * @return $this
     */
    public function moveOrderUp()
    {
        $orderColumnName = $this->determineOrderColumnName();

        $swapWithModel = $this->buildSortQuery()->limit(1)
            ->ordered('desc')
            ->where($orderColumnName, '<', $this->$orderColumnName)
            ->first();

        if (! $swapWithModel) {
            return $this;
        }

        return $this->swapOrderWithModel($swapWithModel);
    }

    /**
     * Swap the order of this model with the order of another model.
     *
     * @param Model $otherModel
     *
     * @return $this
     */
    public function swapOrderWithModel(Model $otherModel)
    {
        $orderColumnName = $this->determineOrderColumnName();

        $oldOrderOfOtherModel = $otherModel->$orderColumnName;

        $otherModel->$orderColumnName = $this->$orderColumnName;
        $otherModel->save();

        $this->$orderColumnName = $oldOrderOfOtherModel;
        $this->save();

        return $this;
    }

    /**
     * Swap the order of two models.
     *
     * @param Model $model
     * @param Model $otherModel
     */
    public static function swapOrder(Model $model, Model $otherModel)
    {
        $model->swapOrderWithModel($otherModel);
    }

    /**
     * Moves this model to the first position.
     *
     * @return $this
     */
    public function moveToStart()
    {
        $firstModel = $this->buildSortQuery()->limit(1)
            ->ordered()
            ->first();

        if ($this->isTranslatable()) {
            if ($firstModel->item_id === $this->item_id) {
                return $this;
            }
        } else {
            if ($firstModel->id === $this->id) {
                return $this;
            }
        }

        $orderColumnName = $this->determineOrderColumnName();

        $this->$orderColumnName = $firstModel->$orderColumnName;
        $this->save();

        if ($this->isTranslatable()) {
            $this->buildSortQuery()->where('item_id', '!=', $this->item_id)->increment($orderColumnName);
        } else {
            $this->buildSortQuery()->where($this->getKeyName(), '!=', $this->id)->increment($orderColumnName);
        }

        return $this;
    }

    /**
     * Moves this model to the last position.
     *
     * @return $this
     */
    public function moveToEnd()
    {
        $maxOrder = $this->getHighestOrderNumber();

        $orderColumnName = $this->determineOrderColumnName();

        if ($this->$orderColumnName === $maxOrder) {
            return $this;
        }

        $oldOrder = $this->$orderColumnName;

        $this->$orderColumnName = $maxOrder;
        $this->save();

        if ($this->isTranslatable()) {
            $this->buildSortQuery()->where('item_id', '!=', $this->item_id)
                ->where($orderColumnName, '>', $oldOrder)
                ->decrement($orderColumnName);
        } else {
            $this->buildSortQuery()->where($this->getKeyName(), '!=', $this->id)
                ->where($orderColumnName, '>', $oldOrder)
                ->decrement($orderColumnName);
        }

        return $this;
    }

    /**
     * Build eloquent builder of sortable.
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function buildSortQuery()
    {
        return static::query();
    }

    /**
     * Check has owner model use Translatable trait
     *
     * @return bool
     */
    protected function isTranslatable()
    {
        return Arr::has(class_uses($this), Translatable::class);
    }
}
