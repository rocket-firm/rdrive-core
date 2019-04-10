<?php

namespace Rocketfirm\Rdrive\Commands;

use Illuminate\Console\Command;

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
     * @return mixed
     */
    public function handle()
    {
        $this->info('Display this on the screen test');
    }
}
