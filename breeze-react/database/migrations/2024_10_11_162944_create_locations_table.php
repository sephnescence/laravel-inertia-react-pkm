<?php

use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('locations', function (Blueprint $table) {
            $table->uuid('id')->primary();
        });

        // This table references itself, and I want the columns in this particular order, so the table must
        //  be created first, and then the remaining columns can be added
        Schema::table('locations', function (Blueprint $table) {
            $table->foreignIdFor(User::class);
            $table->foreignUuid('parent_location_id')->nullable()->references('id')->on('locations');
            $table->string('icon');
            $table->string('display_name');
            $table->text('description');
            $table->timestampsTz();
            $table->softDeletesTz();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('locations');
    }
};
