<?php

use App\Models\Country;
use Illuminate\Database\Seeder;

class RdriveDummyDatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        factory(Country::class, 10)->create();
    }
}
