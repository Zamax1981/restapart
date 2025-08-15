<?php
// Редирект с /index → /
if (isset($_SERVER['REQUEST_URI']) && $_SERVER['REQUEST_URI'] === '/index') {
    header('Location: /', true, 301);
    exit;
}

// Список разрешённых URL (или проверка через роутинг)
$valid_paths = [
    '/', 
    '/about', 
    '/contacts', 
    '/partners',
    '/privacy-policy',
    '/thankyou',
    '/tyumen',
    '/embaewo',
];

// Получаем текущий путь
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

// Если путь не в списке валидных — ошибка 404
if (!in_array($path, $valid_paths)) {
    http_response_code(404);
    if (file_exists('404.html')) {
        readfile('404.html');
    } else {
        echo '404 - Страница не найдена';
    }
    exit;
}

// Если всё ок — показываем главную
if (file_exists('index.html')) {
    readfile('index.html');
} else {
    http_response_code(404);
    echo 'Главная страница (index.html) не найдена.';
}
?>