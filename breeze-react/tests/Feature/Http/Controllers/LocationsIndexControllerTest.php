<?php

use App\Models\Location;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Sequence;

use function Pest\Laravel\actingAs;
use function Pest\Laravel\get;

it('Redirects guests', function () {
    get(route('locations.index'))
        ->assertRedirect();
});

it('Returns the logged in user\'s locations', function () {
    $user = User::factory()->create();

    $location = Location::factory()
        ->recycle($user)
        ->create();

    actingAs($user)
        ->get(route('locations.index'))
        ->assertOk()
        ->assertSee($location->display_name);
});

it('Returns the location in alphabetical order - Using a sequencer', function () {
    // Create them in reverse order to prove that they're not just being returned in created_at order
    $user = User::factory()
        ->has(Location::factory()
            ->count(2)
            ->state(
                new Sequence(
                    ['display_name' => 'Location B'],
                    ['display_name' => 'Location A'],
                )
            ))
        ->create();

    actingAs($user)
        ->get(route('locations.index'))
        ->assertOk()
        ->assertSeeInOrder([
            'Location A',
            'Location B',
        ]);
});

it('Returns the location in alphabetical order', function () {
    $user = User::factory()->create();

    // Create them in reverse order to prove that they're not just being returned in created_at order
    $locationB = Location::factory()
        ->recycle($user)
        ->create(['display_name' => 'Location B']);

    $locationA = Location::factory()
        ->recycle($user)
        ->create(['display_name' => 'Location A']);

    actingAs($user)
        ->get(route('locations.index'))
        ->assertOk()
        ->assertSeeInOrder([
            $locationA->display_name,
            $locationB->display_name,
        ]);
});

it('Does not show the locations of other users', function () {
    $user = User::factory()->create();
    $userLocation = Location::factory()
        ->recycle($user)
        ->create(['display_name' => 'User Location']);

    $otherUser = User::factory()->create();
    $otherUserLocation = Location::factory()
        ->recycle($otherUser)
        ->create(['display_name' => 'Other user Location']);

    actingAs($user)
        ->get(route('locations.index'))
        ->assertOk()
        ->assertSee($userLocation->display_name)
        ->assertDontSee($otherUserLocation->display_name);
});
