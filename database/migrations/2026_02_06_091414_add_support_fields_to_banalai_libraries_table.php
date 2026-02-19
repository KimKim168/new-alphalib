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
            $table->string('library_supporter_name')->nullable();
            $table->string('library_supporter_chat_link')->nullable()->after('library_supporter_name');
            $table->string('website')->nullable()->after('library_supporter_chat_link');
            $table->string('facebook')->nullable()->after('website');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('banalai_libraries', function (Blueprint $table) {
            $table->dropColumn([
                'library_supporter_name',
                'library_supporter_chat_link',
                'website',
                'facebook',
            ]);
        });
    }
};
