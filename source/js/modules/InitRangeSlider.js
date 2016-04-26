'use strict';

import 'jquery-ui-browserify';

let InitRangeSlider = () => {
  let $rangeSlider = $('#range-slider');
  let $rangeSliderValue = $('#range-slider-value');

  // Инициализируем JQuery слайдер
  $rangeSlider.slider({
    range: 'min',
    value:10,
    min: 0.1,
    max: 30,
    step: 0.1,
    slide: ( event, ui ) => {
      $rangeSliderValue.html( ui.value );
    },
    stop: (ui, event) => {
      $rangeSlider.trigger('stop', [event, ui]);
    }
  });

  // Задаем стартовое значение для значени слайдера
  $rangeSliderValue.html(  $rangeSlider.slider('value') );

  // Красивый вариант слайдера но с багами - не тянет шаг 0.1
  // document.querySelector('input[type=range]').addEventListener('input', function() {
  //   this.setAttribute('value', this.value);
  // });
}

export default InitRangeSlider;
