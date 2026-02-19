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
        Schema::create('videos', function (Blueprint $table) {
            $table->id();

            $table->string('name')->nullable();
            $table->string('name_kh')->nullable();
            $table->text('short_description')->nullable();
            $table->text('short_description_kh')->nullable();
            $table->longText('long_description')->nullable();
            $table->longText('long_description_kh')->nullable();
            $table->string('status')->nullable();
            $table->string('external_link')->nullable();
            $table->string('file_type_code')->nullable();
            $table->unsignedInteger('total_view_count')->default(0);
            $table->unsignedInteger('total_read_count')->default(0);
            $table->unsignedInteger('total_download_count')->default(0);
            $table->unsignedInteger('total_page')->nullable();

            $table->string('thumbnail')->nullable();

            $table->string('category_code')->nullable();
            $table->foreign('category_code')
                ->references('code')
                ->on('video_categories')
                ->cascadeOnUpdate()
                ->nullOnDelete();

            $table->foreignId('created_by')
                ->nullable()
                ->constrained('users')
                ->cascadeOnUpdate()
                ->nullOnDelete();

            $table->foreignId('updated_by')
                ->nullable()
                ->constrained('users')
                ->cascadeOnUpdate()
                ->nullOnDelete();


            $table->year('published_year')->nullable();
            $table->unsignedTinyInteger('published_month')->nullable(); // 1–12
            $table->unsignedTinyInteger('published_day')->nullable();   // 1–31

            

            $table->softDeletes();
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('videos');
    }
};
