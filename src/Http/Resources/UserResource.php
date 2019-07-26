<?php

namespace Rocketfirm\Rdrive\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

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
         * @var $this App\User
         */
        return array_merge(parent::toArray($request), [
            'roles' => array_map(function ($role) {
                return $role['name'];
            }, $this->roles->toArray()),
            'permissions' => array_map(function ($permission) {
                return $permission['name'];
            }, $this->getAllPermissions()->toArray()),
        ]);
    }
}
