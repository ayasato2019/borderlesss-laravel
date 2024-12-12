<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- canonical -->
    <link rel="canonical" href="{{ url()->current() }}" />
    <!-- CSRF -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- トラッキング -->
    <script id="_bownow_ts">
        var _bownow_ts = document.createElement('script');
        _bownow_ts.charset = 'utf-8';
        _bownow_ts.src = 'https://contents.bownow.jp/js/UTC_e345f40dcfdf5b294d75/trace.js';
        document.getElementsByTagName('head')[0].appendChild(_bownow_ts);
    </script>
    <link rel="shortcut icon" href="{{ asset('/favicon.ico') }}">
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DotGothic16&family=Noto+Sans+JP:wght@100..900&family=Zen+Antique+Soft&family=Zen+Dots&display=swap" rel="stylesheet">
    <!-- Scripts -->
    <title inertia>{{ config('app.name', 'Laravel') }}</title>
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/Pages/{$page['component']}.tsx"])
    @inertiaHead
</head>

<body class="relative w-full h-auto min-h-screen leading-relaxed box-border font-ja antialiased bg-gray-50 text-slate-950">
    @inertia
</body>

</html>