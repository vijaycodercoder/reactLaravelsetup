<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    <title>Magas</title>
</head>
@viteReactRefresh
@vite('resources/js/main.jsx')

<body>
    <div id="app"></div>
    <script src="{{ mix('js/app.js') }}" defer></script>
</body>

</html>
