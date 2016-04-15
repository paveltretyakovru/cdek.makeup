import $ from 'jquery';
import popover from 'popover';
import 'webui-popover';
import 'jquery.cookie';

let InitPopovers = () => {
  let $selectCityForm = $('#field-for-popover-city');
  let $selectCityPopover = $('#select-city');

  $('.add-services img').webuiPopover({trigger: 'hover'});
  $selectCityForm.webuiPopover({url: '#select-city', trigger: 'manual', placement: 'bottom-left'});

  $selectCityForm.webuiPopover('show');

  $selectCityPopover.find('button').on('click', () => {
    $selectCityForm.webuiPopover('hide');
  });

  $selectCityPopover.find('.btn-yes').on('click', () => {
    $selectCityForm.val('Санкт-Петербург');
  });

  $selectCityPopover.find('.btn-select').on('click', () => {
    $selectCityForm.focus().click();
  });

  $selectCityForm.on('change', () => {
    console.log('Form was change');
  });
}

export default InitPopovers;
