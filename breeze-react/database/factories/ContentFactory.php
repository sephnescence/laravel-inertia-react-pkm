<?php

namespace Database\Factories;

use App\Models\Content;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Content>
 */
class ContentFactory extends Factory
{
    public function definition(): array
    {
        return [
            'content' => fake()->text(),
        ];
    }
}
