'use strict';

import $ from 'jquery';
import 'jquery-modal';

let InitContactModalForm = () => {
  let $contactModal = $('#contact-modal'),
      $form = $contactModal.find('form'),
      $name = $form.find('input[type=text]'),
      $phone= $form.find('input[type=email]');

  // Менеджеры без компиляции hamla изменили html. Поэтому приходится вот так
  // ¯ \ _ (ツ) _ / ¯
  $phone.attr('type', 'tel');

  // init jquery-modal
  $('.js-show-contact-modal').on('click', () => $contactModal.modal({}));

  // listen event submit
  $form.on('submit', (event) => {
    event.preventDefault();

    let data = {
      name: $name.val(),
      phone: $phone.val(),
    };

    $.post('mail.php', data)
      .done((data) => {
        console.log('Успешный запрос. Результат:', data);
      })
      .fail((data) => {
        console.error('Ошбибка во время запроса. Результат:', data);
      })
      .always((data) => {
        // console.log('Ф');
      });

    console.log('Submit contact form', $name.val(), $phone.val());
  });
}

export default  InitContactModalForm();
