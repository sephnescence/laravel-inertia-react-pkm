<?php

namespace App\Services;

use App\Models\Location;

class LocationFactoryService
{
    // Width could also be tackled, but I haven't decided if the depth would only apply to one child or all of them
    public function createLocationsUntilDepth(int $desiredDepth = 1): Location
    {
        if ($desiredDepth < 1) {
            throw new \InvalidArgumentException('Desired depth must be greater than 0');
        }

        $location = $rootLocation = Location::factory()->create();
        for ($currentDepth = 1; $currentDepth <= $desiredDepth; $currentDepth++) {
            $childLocation = Location::factory()
                ->create([
                    'user_id' => $location->user_id, // Ensure the parent has the same user
                ]);

            $childLocation->parentLocation()->associate($location)->save();

            $location = $childLocation;
        }

        return $rootLocation;
    }
}
