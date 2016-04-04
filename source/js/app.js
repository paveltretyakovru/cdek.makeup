'use strict';
import $ from 'jquery';
import GoogleMapCoords from 'modules/GoogleMapCoords';
// import Application from 'application';

$(document).ready( () => {
  $(window).load( () => {
    console.log('Test');
    GoogleMapCoords();

    document.querySelector('input[type=range]').addEventListener('input', function() {
      this.setAttribute('value', this.value);
    });
    // let app = new Application();
  });
});
