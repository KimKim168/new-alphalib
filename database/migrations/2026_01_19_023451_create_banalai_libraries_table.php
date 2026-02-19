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
        Schema::create('banalai_libraries', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('created_by')->nullable();
            $table->unsignedBigInteger('updated_by')->nullable();

            $table->string('name');
            $table->string('name_kh')->nullable();

            $table->text('short_description')->nullable();
            $table->text('short_description_kh')->nullable();

            $table->longText('long_description')->nullable();
            $table->longText('long_description_kh')->nullable();

            $table->string('link')->nullable();
            $table->string('icon')->nullable();
            
            $table->unsignedBigInteger('total_views_count')->default(0);
            $table->integer('order_index')->default(100);
            
            $table->softDeletes();
            $table->timestamps();
        });

        Schema::table('banalai_libraries', function (Blueprint $table) {

            $table->foreign('created_by')
                ->references('id')->on('users')
                ->cascadeOnUpdate()
                ->nullOnDelete();

            $table->foreign('updated_by')
                ->references('id')->on('users')
                ->cascadeOnUpdate()
                ->nullOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('banalai_libraries');
    }
};
