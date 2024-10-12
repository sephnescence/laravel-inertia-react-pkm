<?php

namespace Database\Factories;

use App\Models\Location;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Location>
 */
class LocationFactory extends Factory
{
    protected $model = Location::class;

    public function definition(): array
    {
        return [
            'user_id' => User::factory(),
            'icon' => 'fa-buildings',
            'display_name' => $this->faker->sentence(),
            'description' => $this->faker->paragraph(),
        ];
    }
}
