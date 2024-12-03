<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWorksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('works', function (Blueprint $table) {
            $table->id(); // 自動インクリメントするIDカラム
            $table->string('url'); // URL
            $table->string('alt'); // altテキスト
            $table->string('image_png'); // PNG画像のURL
            $table->string('image_webp'); // WebP画像のURL
            $table->text('comment'); // コメント
            $table->boolean('hearing')->default(false); // 聴取
            $table->boolean('design')->default(false); // デザイン
            $table->boolean('coding')->default(false); // コーディング
            $table->boolean('domain')->default(false); // ドメイン
            $table->boolean('server_upload')->default(false); // サーバーアップロード
            $table->boolean('aftercare')->default(false); // アフターケア
            $table->timestamps(); // created_at と updated_at カラム
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('works');
    }
}
