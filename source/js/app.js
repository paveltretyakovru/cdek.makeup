'use strict';
import $ from 'jquery';
import 'jquery.cookie';

import InitGeoApi from 'modules/InitGeoApi';
import InitSliders from 'modules/InitSliders';
import InitShowMore from 'modules/InitShowMore';
import InitPopovers from 'modules/InitPopovers';
import InitScrollNav from 'modules/InitScrollNav';
import InitVkModules from 'modules/InitVkModules';
import InitCalculator from 'modules/InitCalculator';
import InitRangeSlider from 'modules/InitRangeSlider';
import InitScrollFadeEffects from 'modules/InitScrollFadeEffects';
import InitContactModalForm from 'modules/InitContactModalForm';

window.$ = $;

InitScrollFadeEffects();
InitSliders();
InitPopovers();
InitGeoApi();
InitCalculator();
InitRangeSlider();
InitScrollNav();

$(document).ready( () => {

  $(window).load( () => {

    InitVkModules();
    InitShowMore();

  });
});
