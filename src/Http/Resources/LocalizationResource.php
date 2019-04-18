<?php

namespace Rocketfirm\Rdrive\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Rocketfirm\Rdrive\Models\Localization;

class LocalizationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        /**
         * @var $this Localization
         */
        return array_merge(parent::toArray($request), []);
    }
}
