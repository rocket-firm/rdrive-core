<?php

namespace Rocketfirm\Rdrive\Console;

use Illuminate\Console\Command;
use Symfony\Component\Console\Input\InputOption;

class InstallCommand extends Command
{
    /**
     * The console command name.
     *
     * @var string
     */
    protected $name = 'rdrive:install';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Install the Rocket Drive package';

    protected function getOptions()
    {
        return [
            ['force', null, InputOption::VALUE_NONE, 'Force the operation to run when in production', null],
            ['with-dummy', null, InputOption::VALUE_NONE, 'Install with dummy data', null],
        ];
    }

    /**
     * Execute the console command.
     *
     * @return void
     */
    public function handle()
    {
        $this->info('Installing...');

        $this->info('Publishing the Rdrive config and assets files');
        $this->call('vendor:publish', ['--tag' => ['rdrive-config', 'rdrive-assets'], '--force' => $this->option('force')]);

        if ($this->option('with-dummy')) {
            $this->info('Publishing dummy content');
            $this->call('vendor:publish', ['--tag' => ['rdrive-dummy'], '--force' => $this->option('force')]);

            $this->setDummyConfigs();
        }

        /**
         * Publish config from `Astrotomic/laravel-translatable` package
         */
        $this->info('Publishing the Translatable config file');
        $this->call('vendor:publish', ['--tag' => ['translatable']]);

        /**
         * Publish config and migrations from `spatie/laravel-translation-loader` package
         */
        $this->info('Publishing the Translation loader config and migrations files');
        $this->call('vendor:publish', ['--tag' => ['migrations', 'config'], '--provider' => 'Spatie\TranslationLoader\TranslationServiceProvider']);

        /**
         * Publish languages from `andrey-helldar/laravel-lang-publisher` package
         */
        $this->info('Publishing languages');
        $this->call('trans:publish', ['locale' => 'en', '--force' => $this->option('force')]);
        $this->call('trans:publish', ['locale' => 'ru', '--force' => $this->option('force')]);
        $this->call('trans:publish', ['locale' => 'kk', '--force' => $this->option('force')]);

        /**
         * Publish config and migrations from `spatie/laravel-permission` package
         */
        $this->info('Publishing the Permissions migrations files');
        $this->call('vendor:publish', ['--tag' => ['migrations', 'config'], '--provider' => 'Spatie\Permission\PermissionServiceProvider']);

        $this->setLocales();
    }

    /**
     * Set application locales
     */
    private function setLocales()
    {
        $defaultLocales = ['en', 'ru', 'kk'];
        $currentLocales = \Config::get('translatable.locales');
        if ($defaultLocales !== $currentLocales) {
            \Config::write('translatable.locales', $defaultLocales);
        }
    }

    /**
     * Set dummy configs
     */
    private function setDummyConfigs()
    {
        $dummySchemas = [
            \App\Models\Country::class
        ];

        $currentSchemas = \Config::get('rdrive.schemas');

        $schemas = array_unique(array_merge($currentSchemas, $dummySchemas));

        \Config::write('rdrive.schemas', $schemas);
    }
}
