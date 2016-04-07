'use strict';
import $ from 'jquery';
import unslider from 'unslider';
import wow from 'wow';
// import {popover} from 'bootstrap';
import popover from 'popover';
import 'webui-popover';
// import GoogleMapCoords from 'modules/GoogleMapCoords';
// import Application from 'application';

window.$ = $;

// Init scroll fadein effect
new wow.WOW({offset : 100}).init();

// Init first page slider
$('.slider').unslider({
  autoplay : true,
  arrows : false
});

$(document).ready( () => {
  $(window).load( () => {
    // GoogleMapCoords();

    // Init range slider
    document.querySelector('input[type=range]').addEventListener('input', function() {
      this.setAttribute('value', this.value);
    });

    // Init translate
    function googleTranslateElementInit() {
      new google.translate.TranslateElement({pageLanguage: 'ru', includedLanguages: 'en,zh-CN', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
    }

    // Show more information on click more buttons (подбробнее)
    $('.more').on('click', (event) => {
      let $el = $(event.currentTarget);
      let $parent = $el.parents('li');
      let $descMore = $parent.find('.desc-more');

      $descMore.toggle('normal');
    });

    // Initi add-service fly help
    $('.add-services span').webuiPopover({trigger: 'hover'});

    // let app = new Application();
  });
});
