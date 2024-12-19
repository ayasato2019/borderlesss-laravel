<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    |
    | Here you may configure your settings for cross-origin resource sharing
    | or "CORS". This determines what cross-origin operations may execute
    | in web browsers. You are free to adjust these settings as needed.
    |
    | To learn more: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    |
    */

    'paths' => ['api/*', 'sanctum/csrf-cookie'], // 使用するパスを設定
    'allowed_methods' => ['*'],
    'allowed_origins' => ['https://zenn.dev'],
    'allowed_headers' => ['*'],
    // 'allowed_headers' => ['Content-Type', 'X-Requested-With', 'Authorization', 'Accept'], // 'X-Requested-With' を追加
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => true,

];
