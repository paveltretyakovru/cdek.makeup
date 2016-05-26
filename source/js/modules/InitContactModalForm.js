'use strict';

import $ from 'jquery';
import 'jquery-modal';
import 'toast';

let InitContactModalForm = () => {
  let $contactModal = $('#contact-modal'),
      $form = $contactModal.find('form'),
      $name = $form.find('input[type=text]'),
      $phone= $form.find('input[type=email]');

  // Менеджеры без компиляции hamla изменили html. Поэтому приходится вот так
  // ¯ \ _ (ツ) _ / ¯
  $phone.attr('type', 'tel').attr('required', true);
  $name.attr('required', true);

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
      .done( (data) => {
        data = JSON.parse(data);
        let status = data.status;
        let message = data.message || 'Запрос выполнен';

        switch (status) {
          case 'success':
            console.log('Успешный запрос. Результат:', data);

            $.toast({
                text: message,
                showHideTransition: 'slide',
                icon: 'success',
                hideAfter: 10000,
            });

            break;

          case 'error':
            $.toast({
              text: message,
              showHideTransition: 'fade',
              icon: 'error',
              hideAfter: 10000,
            });
            break;

          default:
            console.log('Default');
        }

      })
      .fail((data) => {
        console.error('', data);
        $.toast({
          text: `Ошбибка во время запроса. Результат: ${data}`,
          showHideTransition: 'fade',
          icon: 'error',
          hideAfter: 10000,
        });
      })
      .always((data) => {
        $.modal.close();
      });

    console.log('Submit contact form', $name.val(), $phone.val());
  });
}

export default  InitContactModalForm();
