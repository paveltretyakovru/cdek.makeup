import $ from 'jquery';

let InitShowMore = () => {
  $('.more').on('click', (event) => {
    let $el = $(event.currentTarget);
    let $parent = $el.parents('li');
    let $descMore = $parent.find('.desc-more');

    $descMore.toggle('normal');
  });
}

export default InitShowMore;
