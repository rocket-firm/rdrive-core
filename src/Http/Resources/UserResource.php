<?php

namespace Rocketfirm\Rdrive\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Spatie\TranslationLoader\LanguageLine;

class UserResource extends JsonResource
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
         * @var $this LanguageLine
         */
        return array_merge(parent::toArray($request), [
        ]);
    }
}
