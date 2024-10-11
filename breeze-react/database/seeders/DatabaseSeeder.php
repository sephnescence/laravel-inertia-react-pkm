<?php

namespace Database\Seeders;

use App\Models\Content;
use App\Models\User;
use App\Services\LocationFactoryService;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    public function run(): void
    {
        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        Content::factory(10)->create();

        app(LocationFactoryService::class)->createLocationsUntilDepth(5);
    }
}
