<?php

namespace Rocketfirm\Rdrive\Providers;

use Illuminate\Foundation\AliasLoader;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider;
use Rocketfirm\Rdrive\Commands\InstallCommand;
use Rocketfirm\Rdrive\Facades\Rdrive as RdriveFacade;
use Rocketfirm\Rdrive\Rdrive;

class RdriveServiceProvider extends AuthServiceProvider
{
    /**
     * Register the application services.
     */
    public function register()
    {
        $this->app->singleton('rdrive', function () {
            return new Rdrive();
        });

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
        $this->loadMigrationsFrom(__DIR__.'/../../migrations');
        $this->loadViewsFrom(__DIR__ . '/../../publishable/resources/views', 'rdrive');
        $this->loadRoutesFrom(__DIR__ . '/../../routes/web.php');
        $this->loadRoutesFrom(__DIR__ . '/../../routes/api.php');
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