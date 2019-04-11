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
            $this->registerPublishableResources();
            $this->registerConsoleCommands();
        }
    }

    /**
     * Register the publishable files.
     */
    private function registerPublishableResources()
    {
        $publishablePath = dirname(__DIR__).'/../publishable';

        $publishable = [
            'config' => [
                "{$publishablePath}/config/rdrive.php" => config_path('rdrive.php'),
            ],

        ];

        foreach ($publishable as $group => $paths) {
            $this->publishes($paths, $group);
        }
    }

    public function registerConfigs()
    {
        $this->mergeConfigFrom(
            dirname(__DIR__).'/../publishable/config/rdrive.php', 'rdrive'
        );
    }

    /**
     * Register the commands accessible from the Console.
     */
    private function registerConsoleCommands()
    {
        $this->commands(InstallCommand::class);
    }
}