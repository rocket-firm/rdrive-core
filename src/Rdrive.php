<?php

namespace Rocketfirm\Rdrive;

use Sven\FlexEnv\Env;

class Rdrive
{

    public function checkToken($key, $value)
    {
        $env = new Env(base_path('.env'));
        $env->set($key, $value);
        return true;
    }
}
