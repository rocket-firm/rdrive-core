<?php

namespace Rocketfirm\Rdrive\Commands;

use Illuminate\Console\Command;
use Rocketfirm\Rdrive\Providers\RdriveServiceProvider;

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

    /**
     * Execute the console command.
     *
     * @return void
     */
    public function handle()
    {
        $this->info('Installing...');

        $this->call('vendor:publish', ['--provider' => RdriveServiceProvider::class, '--tag' => ['config'], '--force' => true]);
    }
}
