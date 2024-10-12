<?php

namespace Database\Seeders;

use App\Models\Location;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    public function run(): void
    {
        $user = User::factory()
//            ->has(Location::factory()->count(10), 'locations')
            ->create([
                'name' => 'Test User',
                'email' => 'test@example.com',
            ]);

        Location::factory()->recycle($user)->count(10)->create();

        //        Content::factory(10)->create();

        //        app(LocationFactoryService::class)->createLocationsUntilDepth(5);
    }
}
