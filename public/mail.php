<?php
$email = 'a.cybin@cdek.ru';
// $email = '1@tretyakovpavel.ru';
$subject = 'Запрос консультации cdekexpress.ru';

try {
  if(!empty($_POST['name']) && !empty($_POST['phone'])){

    // Собираем все данные в кучу
    $name = $_POST['name'];
    $phone = $_POST['phone'];

    // Создаем сообщение
    $message = "Имя: {$name}\r\n"
             . "Телефон: {$phone}";

    if (mail($email, $subject, $message)) {

      // Усе ок!
      echo json_encode([
        'status' => 'success',
        'message' => 'Сообщение успешно отправлено. В ближайшее время, мы Вам перезвоним',
      ], JSON_UNESCAPED_UNICODE);

    } else {

      // Функция mail не захотела фурыкать
      throw new Exception('Ошибка при отправки электронного письма. Пожалуйста, попробуйте позже', 1);
    }

  } else {
    throw new Exception('Заполните все поля формы', 1);
  }

} catch (Exception $e) {
  die(json_encode([
    'status' => 'error',
    'message' => 'Ошибка во время запроса. Пожалуйста, попробуйте позже' . $e->getMessage(),
  ], JSON_UNESCAPED_UNICODE));
}
