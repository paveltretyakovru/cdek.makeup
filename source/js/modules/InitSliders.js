import unslider from 'unslider';

let InitSliders = () => {
  $('.slider').unslider({
    autoplay : true,
    arrows : false
  });

  let $language = $('.language');
  let $firstSlider = $('article.with-slider .unslider-nav');
  $firstSlider.css('top', $language.position().top + 4);

  $(window).resize(() => {
    $firstSlider.css('top', $language.position().top + 4);
  })
}

export default InitSliders;
