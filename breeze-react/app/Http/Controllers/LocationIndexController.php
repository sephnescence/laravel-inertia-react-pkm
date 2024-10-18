<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class LocationIndexController extends Controller
{
    public function __invoke()
    {
        $locations = auth()
            ->user()
            ->locations()
            ->orderBy('display_name')
            ->whereNull('parent_location_id')
            ->get(['display_name', 'id', 'description']);

        return Inertia::render('Location/Index', [
            'locations' => $locations,
        ]);
    }
}
