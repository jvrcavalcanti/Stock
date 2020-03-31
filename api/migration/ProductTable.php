<?php

use Accolon\Migration\Migration;
use Accolon\Migration\Schema;
use Accolon\Migration\Blueprint;

class ProductTable implements Migration
{
    private string $table = "products";
    
    public function up(): bool
    {
        return Schema::create($this->table, function (Blueprint $table) {
            $table->increments("id");
            $table->string("name");
            $table->text("description");
            $table->string("type");
            $table->integer("quantity");
            $table->integer("user_id");
        });
    }

    public function down(): bool
    {
        return Schema::dropIfExists($this->table);
    }
}