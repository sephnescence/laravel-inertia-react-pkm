<h1>
    Locations
</h1>

@foreach($locations as $location)
    <h2>{{ $location->display_name }}</h2>
@endforeach
