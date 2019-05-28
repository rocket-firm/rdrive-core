<?php

namespace Rocketfirm\Rdrive\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider;
use Rocketfirm\Rdrive\Console\InstallCommand;
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
    }

    /**
     * Bootstrap the application services.
     */
    public function boot()
    {
        if ($this->app->runningInConsole()) {
            $this->registerMigrations();
            $this->registerPublishableResources();
            $this->registerConsoleCommands();
        }

        $this->registerRoutes();
        $this->registerViews();
    }

    /**
     * Register the publishable files.
     */
    private function registerPublishableResources()
    {
        $publishablePath = dirname(__DIR__) . '/..';

        $publishable = [
            'rdrive-config' => [
                "{$publishablePath}/config/rdrive.php" => config_path('rdrive.php'),
            ],
            'rdrive-views' => [
                "{$publishablePath}/resources/views" => resource_path('views/vendor/rdrive'),
            ],
            'rdrive-assets' => [
                "{$publishablePath}/public" => public_path('vendor/rdrive'),
            ],
            'rdrive-dummy-seeds' => [
                "{$publishablePath}/dummy/database/seeds" => database_path('seeds'),
                "{$publishablePath}/dummy/database/factories" => database_path('factories'),
            ],
            'rdrive-dummy-migrations' => [
                "{$publishablePath}/dummy/database/migrations" => database_path('migrations'),
            ],
            'rdrive-dummy-models' => [
                "{$publishablePath}/dummy/app/Models" => app_path('Models'),
            ],
        ];

        foreach ($publishable as $group => $paths) {
            $this->publishes($paths, $group);
        }
    }

    /**
     * Register the package configs.
     *
     * @return void
     */
    private function registerConfigs()
    {
        $this->mergeConfigFrom(
            dirname(__DIR__) . '/../config/rdrive.php', 'rdrive'
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

    /**
     * Register the package routes.
     *
     * @return void
     */
    private function registerRoutes()
    {
        $this->loadRoutesFrom(dirname(__DIR__) . '/../routes/web.php');
        $this->loadRoutesFrom(dirname(__DIR__) . '/../routes/api.php');
    }

    /**
     * Register the package migration files.
     *
     * @return void
     */
    private function registerMigrations()
    {
        $this->loadMigrationsFrom(dirname(__DIR__) . '/../database/migrations');
    }

    /**
     * Register the package views.
     *
     * @return void
     */
    private function registerViews()
    {
        $this->loadViewsFrom(dirname(__DIR__) . '/../resources/views', 'rdrive');
    }
}
