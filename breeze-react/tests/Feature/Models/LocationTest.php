<?php

use App\Models\Location;
use App\Models\User;
use App\Services\LocationFactoryService;
use Illuminate\Database\LazyLoadingViolationException;

test('Locations can be created with recycled users', function () {
    // This test was inspired by Laracasts' https://laracasts.com/series/30-days-to-learn-laravel-11,
    //  but I don't know if I like it. I think the next test feels cleaner

    $user = User::factory()->create();

    $parentLocation = Location::factory()
        ->recycle($user)
        ->create();

    $childLocation = Location::factory()
        ->recycle($user)
        ->create([
            'parent_location_id' => $parentLocation->id,
        ]);

    expect($childLocation->parentLocation->is($parentLocation))
        ->toBeTrue()
        ->and($childLocation->user_id)
        ->toEqual($parentLocation->user_id);
});

test('Locations can be created with parents', function () {
    $user = User::factory()->create();

    $location = Location::factory()
        ->recycle($user)
        ->create([
            // Interesting that I don't need to call recycle in here
            'parent_location_id' => Location::factory(),
        ]);

    expect($location->parentLocation->user_id)->toBe($location->user_id);
});

test('Locations can be created with children', function () {
    $location = Location::factory()
        ->afterCreating(function (Location $location) {
            $childLocation = Location::factory()->create([
                'user_id' => $location->user_id, // Ensure the parent has the same user
            ]);

            $childLocation->parentLocation()->associate($location)->save();
        })
        ->create();

    // Reload it from the database to ensure the parent was actually attached
    $location = Location::findOrFail($location->id);

    expect($location)->toBeInstanceOf(Location::class);

    $childLocation = $location->childrenLocations->first();

    expect($childLocation)
        ->toBeInstanceOf(Location::class)
        ->and($childLocation->parent_location_id)
        ->toEqual($location->id);
});

test('Multiple levels of child Locations can be created iteratively', function () {
    // Interesting to note that setting this to 1,000 _barely_ affects the test speed,
    //  but 10,000 takes 10s for sqlite, and 19s for psql. 3 suffices for this test though
    $desiredDepth = 3;
    $serviceLocation = app(LocationFactoryService::class)->createLocationsUntilDepth($desiredDepth);

    // Reload it from the database to ensure the children were correctly attached
    $location = $rootLocation = Location::findOrFail($serviceLocation->id);

    expect($rootLocation)->toBeInstanceOf(Location::class);

    $actualDepth = 0;
    while ($location->childrenLocations()->count()) {
        $location = $location->childrenLocations->first();

        expect($location)->toBeInstanceOf(Location::class);

        $actualDepth++;
    }

    expect($actualDepth)->toEqual($desiredDepth);
});

test('Multiple levels of child Locations cannot be created with a negative depth', function () {
    app(LocationFactoryService::class)->createLocationsUntilDepth(-1);
})->throws(InvalidArgumentException::class, 'Desired depth must be greater than 0');

test('No exception thrown when accessing the relationship on a single model', function () {
    // This is already prevented in AppServiceProvider, but is here for reference
    //    Model::preventLazyLoading();

    Location::factory()
        ->has(Location::factory()->count(2), 'childrenLocations')
        ->create();

    // This is not enough to trigger the exception
    $location = Location::query()->first();
    expect($location->relationLoaded('childrenLocations'))->toBeFalse();
    $location->childrenLocations;
    expect($location->relationLoaded('childrenLocations'))->toBeTrue();
});

test('No exception thrown when accessing the relationship while iterating through an array', function () {
    // This is already prevented in AppServiceProvider, but is here for reference
    //    Model::preventLazyLoading();

    Location::factory()
        ->count(2)
        ->has(Location::factory()->count(2), 'childrenLocations')
        ->create();

    $locations = Location::all();

    foreach ($locations as $location) {
        // Now something surprising, is this doesn't load the childrenLocations relationship
        expect($location->relationLoaded('childrenLocations'))->toBeFalse();
        $location->childrenLocations()->first(['id']);
        // Note the childrenLocations relationship is still not considered loaded
        // Thus, will not protect you from lazy loading
        expect($location->relationLoaded('childrenLocations'))->toBeFalse();
    }
});

test('Lazy loading exception to be thrown', function () {
    // This is already prevented in AppServiceProvider, but is here for reference
    //    Model::preventLazyLoading();

    Location::factory()
        ->count(2)
        ->has(Location::factory()->count(2), 'childrenLocations')
        ->create();

    $locations = Location::all();

    $location = $locations[0];

    $location->childrenLocations;
})->throws(LazyLoadingViolationException::class);
