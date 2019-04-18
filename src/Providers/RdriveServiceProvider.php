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
        $this->registerConfigs();

        if ($this->app->runningInConsole()) {
            $this->registerPublishableResources();
            $this->registerConsoleCommands();
        }
    }

    /**
     * Bootstrap the application services.
     */
    public function boot()
    {
        $this->loadViewsFrom(__DIR__ . '/../../publishable/resources/views', 'rdrive');
        $this->loadRoutesFrom(__DIR__.'/../App/routes/web.php');
        $this->loadRoutesFrom(__DIR__.'/../App/routes/api.php');
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
            'views' => [
                "{$publishablePath}/resources/views" => resource_path('views/vendor/rdrive'),
            ],
            'assets' => [
                "{$publishablePath}/resources/assets" => resource_path('admin'),
            ],
            'public' => [
                "{$publishablePath}/public" => public_path('admin'),
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
        $this->commands([
            InstallCommand::class
        ]);
    }
}