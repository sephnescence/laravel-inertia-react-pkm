<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @property string $id
 * @property string $user_id
 * @property string $parent_location_id
 * @property string $icon
 * @property string $name
 * @property string $description
 * @property Carbon $created_at
 * @property Carbon $updated_at
 * @property Carbon $deleted_at
 */
class Location extends Model
{
    use HasFactory, HasUuids;

    public function parentLocation(): BelongsTo
    {
        return $this->belongsTo(Location::class);
    }

    public function childrenLocations(): HasMany
    {
        return $this->hasMany(Location::class, 'parent_location_id');
    }
}
