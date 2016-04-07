'use strict';
import $ from 'jquery';
import 'jquery.cookie';

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

$(document).ready( () => {
  $(window).load( () => {

    InitVkModules();
    InitRangeSlider();
    InitShowMore();

  });
});
