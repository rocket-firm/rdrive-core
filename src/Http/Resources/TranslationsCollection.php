<?php

namespace Rocketfirm\Rdrive\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class TranslationsCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $result = array_reduce($this->collection->toArray(), function($carry, $item) {
            $carry[$item["lang"]] = $item;
            return $carry;
        }, []);
        return $result;
    }
}
