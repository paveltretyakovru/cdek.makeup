'use strict';
import $ from 'jquery';
import 'jquery.cookie';
import 'jquery-modal';

import InitGeoApi from 'modules/InitGeoApi';
import InitSliders from 'modules/InitSliders';
import InitShowMore from 'modules/InitShowMore';
import InitPopovers from 'modules/InitPopovers';
import InitVkModules from 'modules/InitVkModules';
import InitRangeSlider from 'modules/InitRangeSlider';
import InitScrollFadeEffects from 'modules/InitScrollFadeEffects';

window.$ = $;

InitScrollFadeEffects();
InitSliders();
InitPopovers();
InitGeoApi();

$('.js-show-contact-modal').on('click', () => {
  $("#contact-modal").modal({
    fadeDuration: 500
  });
  // console.log('Show modal');
});

$(document).ready( () => {
  $(window).load( () => {

    InitVkModules();
    InitRangeSlider();
    InitShowMore();

  });
});
