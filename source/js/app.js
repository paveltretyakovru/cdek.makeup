'use strict';
import $ from 'jquery';
import 'jquery.cookie';
import 'jquery-modal';

import InitGeoApi from 'modules/InitGeoApi';
import InitSliders from 'modules/InitSliders';
import InitShowMore from 'modules/InitShowMore';
import InitPopovers from 'modules/InitPopovers';
import InitScrollNav from 'modules/InitScrollNav';
import InitVkModules from 'modules/InitVkModules';
import InitCalculator from 'modules/InitCalculator';
import InitRangeSlider from 'modules/InitRangeSlider';
import InitScrollFadeEffects from 'modules/InitScrollFadeEffects';

window.$ = $;

InitScrollFadeEffects();
InitSliders();
InitPopovers();
InitGeoApi();
InitCalculator();
InitRangeSlider();
InitScrollNav();

$('.js-show-contact-modal').on('click', () => {
  $("#contact-modal").modal({

  });
  // console.log('Show modal');
});

$(document).ready( () => {

  $(window).load( () => {

    InitVkModules();
    InitShowMore();

  });
});
