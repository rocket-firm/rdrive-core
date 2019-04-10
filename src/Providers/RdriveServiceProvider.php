<?php

namespace Rocketfirm\Rdrive\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider;
use Rocketfirm\Rdrive\Commands\InstallCommand;

class RdriveServiceProvider extends AuthServiceProvider
{
    /**
     * Register the application services.
     */
    public function register()
    {
        if ($this->app->runningInConsole()) {
            $this->registerConsoleCommands();
        }
    }

    /**
     * Register the commands accessible from the Console.
     */
    private function registerConsoleCommands()
    {
        $this->commands(InstallCommand::class);
    }
}