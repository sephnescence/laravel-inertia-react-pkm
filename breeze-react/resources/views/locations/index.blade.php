<h1>
    Locations
</h1>

<x-link href="/" title="Create Location" />

@foreach($locations as $location)
    @php /**  @var \App\Models\Location $location */ @endphp
    <h2>{{ $location->display_name }}</h2>
@endforeach
