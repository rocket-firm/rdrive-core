<?php

namespace Rocketfirm\Rdrive\Facades;

use Illuminate\Support\Facades\Facade;

class Rdrive extends Facade
{
    /**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return 'rdrive';
    }
}
