'use strict';
import $ from 'jquery-browserify';
import 'page-scroll-to-id';

let InitScrollNav = () => {
  $('nav a[href*="#"]').mPageScroll2id();
}

export default InitScrollNav;
