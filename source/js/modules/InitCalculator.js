'use strict';

import $ from 'jquery';
import 'jquery-ui-browserify';

// Функция собирает параметры для инициализиации autocomplete
import getAutocopmpelteOptions from './calculator/getAutocopmpelteOptions';
import {sendCalcStartRequest, sendCalcRequest} from './calculator/sendCalcRequest';

/**
 * @desc Инициализация калькулятора для расчета стоимости достафки
 * @function InitCalculator
 * @return [void]
 * @author Tretyakov Pavel <tretyakovpavel.ru@gmail.com>
 */
let InitCalculator = () => {
  // Собираем селекторы для работы с autocomplete полями
  let $city = $('#city');
  let $inputCityTo = $('#input-city-to');
  let $hiddenCityTo = $('#receiverCityId');
  let $inputCityFrom = $('#input-city-from');
  let $hiddenCityFrom = $('#senderCityId');
  let $cdekForm = $('#cdek-form');
  let $inputWeight = $('#calc-weight-input');
  let $calcResultBlock = $('#calc-result-block');

  // Инициализируем autocomplete
  $inputCityFrom.autocomplete(getAutocopmpelteOptions($inputCityFrom, $hiddenCityFrom));
  $inputCityTo.autocomplete(getAutocopmpelteOptions($inputCityTo, $hiddenCityTo))

  // Отлавливаем событие измнения полей калькулятора
  $inputCityFrom.on('change', (event) => $cdekForm.submit());
  $inputCityTo.on('change', (event) => $cdekForm.submit());
  $('#fourth-page select').on('change', (event) => $cdekForm.submit());
  $('#range-slider').on('stop', (event, ui) => {
    console.log('Event stop', ui);
    $inputWeight.val(ui.value);
    $cdekForm.submit();
  });

  // Обработка события отрпавки формы калькулятора
  $cdekForm.submit((event) => {
    $calcResultBlock.text('');
    event.preventDefault();
    return sendCalcRequest();
  });

  sendCalcStartRequest();
}

export default InitCalculator;
