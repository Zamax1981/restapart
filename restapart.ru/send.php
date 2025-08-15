<?php
// Honeypot защита от ботов
if (!empty($_POST['email_hp'])) {
    // Бот заполнил скрытое поле — выходим
    exit;
}
$to = "mail@restapart.ru";
$subject = "Новая заявка с сайта";
$message = "Имя: " . $_POST['name'] . "\nТелефон: " . $_POST['phone'] . "\nСообщение: " . $_POST['message'];
$headers = "From: no-reply@restapart.ru";

mail($to, $subject, $message, $headers);
header("Location: thankyou.html");
exit();
?>
