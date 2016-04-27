'use strict';

import 'json2ify';
import $ from 'jquery';
import f2j from 'form2js';



let sendCalcRequest = () => {
  let $calcResultBlock = $('#calc-result-block');

  // Вычисляем тариф
  let $calcPlaceFrom = ($('#calc-place-from').val() === '1') ? true : false;
  let $calcPlaceTo = ($('#calc-place-to').val() === '1') ? true : false;
  let tariff = 136;

  if (!$calcPlaceFrom && !$calcPlaceTo) tariff = 136; // c-c
  if (!$calcPlaceFrom && $calcPlaceTo) tariff = 137;  // c-d
  if ($calcPlaceFrom && !$calcPlaceTo) tariff = 138;  // d-c
  if ($calcPlaceFrom && $calcPlaceTo) tariff = 139;   // d-d

  $('input[name="tariffId"]').val(tariff);

  let form2js = f2j.form2js;
  let formData = form2js('cdek-form', '.', true, (node) => {
    if(node.id && node.id.match(/callbackTest/)) {
      return {
        name : node.id,
        value : node.innerHTML
      };
    }
  });
  let formDataJson = JSON.stringify(formData);
  console.log('Отрпавляемые данные', JSON.stringify(formData));


  $.ajax({
    url : 'http://api.edostavka.ru/calculator/calculate_price_by_jsonp.php',
    type : 'GET',
    data : { json : formDataJson },
    jsonp : 'callback',
    dataType : 'jsonp',
    success : (data) => {
      $calcResultBlock.text('');

      console.log('Calc place from val', $calcPlaceFrom, 'Calc place to val', $calcPlaceTo);
      if(data.hasOwnProperty("result")) {
        console.info(`Успешный запрос
          Цена доставки: ${data.result.price}
          Срок доставки: ${data.result.deliveryPeriodMin} - ${data.result.deliveryPeriodMax} дн.
          Планируемая дата доставки: c ${data.result.deliveryDateMin} по ${data.result.deliveryDateMax}
          id тарифа, по которому произведён расчёт: ${data.result.tariffId}
        `);

        // Вставляем полученный ценник
        $calcResultBlock.html(data.result.price);

      } else {
        for(var key in data["error"]) {
          console.error(`Ошибка при выполенении запроса
            Код ошибки: ${data["error"][key].code}
            Текст ошибки: ${data["error"][key].text}
          `);

          $calcResultBlock.append(`
            <br />
            <span style="font-size: 24px; margin-top: 8px;">
            ${data["error"][key].text}
            </span>
          `);
        }
      }
    }
  });
  return false;
}

/**
 * Отправка стартвого запроса
 */
let sendCalcStartRequest = () => {
  let $calcResultBlock = $('#calc-result-block');

  // Выставляем города для начального расчета
  let $hiddenCityTo = $('#receiverCityId');
  let $hiddenCityFrom = $('#senderCityId');

  $hiddenCityFrom.val(137);
  $hiddenCityTo.val(136);

  // Вычисляем тариф
  let tariff = 136;

  $('input[name="tariffId"]').val(tariff);

  let form2js = f2j.form2js;
  let formData = form2js('cdek-form', '.', true, (node) => {
    if(node.id && node.id.match(/callbackTest/)) {
      return {
        name : node.id,
        value : node.innerHTML
      };
    }
  });
  let formDataJson = JSON.stringify(formData);
  console.log('Отрпавляемые данные', JSON.stringify(formData));


  // Место доставки выставляем по-умолчаиню
  let $calcPlaceFrom = 0;
  let $calcPlaceTo = 0;

  $.ajax({
    url : 'http://api.edostavka.ru/calculator/calculate_price_by_jsonp.php',
    type : 'GET',
    data : { json : formDataJson },
    jsonp : 'callback',
    dataType : 'jsonp',
    success : (data) => {
      $calcResultBlock.text('');

      console.log('Calc place from val', $calcPlaceFrom, 'Calc place to val', $calcPlaceTo);
      if(data.hasOwnProperty("result")) {
        console.info(`Успешный запрос
          Цена доставки: ${data.result.price}
          Срок доставки: ${data.result.deliveryPeriodMin} - ${data.result.deliveryPeriodMax} дн.
          Планируемая дата доставки: c ${data.result.deliveryDateMin} по ${data.result.deliveryDateMax}
          id тарифа, по которому произведён расчёт: ${data.result.tariffId}
        `);

        // Вставляем полученный ценник
        $calcResultBlock.html(data.result.price);

      } else {
        for(var key in data["error"]) {
          console.error(`Ошибка при выполенении запроса
            Код ошибки: ${data["error"][key].code}
            Текст ошибки: ${data["error"][key].text}
          `);

          $calcResultBlock.append(`
            <br />
            <span style="font-size: 24px; margin-top: 8px;">
            ${data["error"][key].text}
            </span>
          `);
        }
      }
    }
  });
  return false;
}

export {sendCalcStartRequest};
export default sendCalcRequest;
