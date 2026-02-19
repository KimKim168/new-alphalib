<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('banalai_libraries', function (Blueprint $table) {
            $table->string('phone')->nullable();
            $table->string('telegram')->nullable();
            $table->string('email')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('banalai_libraries', function (Blueprint $table) {
            $table->dropColumn(['phone', 'telegram', 'email']);
        });
    }
};
