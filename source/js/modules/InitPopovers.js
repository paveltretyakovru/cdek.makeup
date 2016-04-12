import $ from 'jquery';
import popover from 'popover';
import 'webui-popover';
import 'jquery.cookie';

let InitPopovers = () => {
  let $selectCityForm = $('#select-my-city');
  let $selectCityPopover = $('#select-city');

  $('.add-services span').webuiPopover({trigger: 'hover'});
  $selectCityForm.webuiPopover({url: '#select-city', trigger: 'manual'});

  $selectCityForm.webuiPopover('show');

  $selectCityPopover.find('button').on('click', () => {
    $selectCityForm.webuiPopover('hide');
  });

  $selectCityPopover.find('.btn-yes').on('click', () => {
    $selectCityForm.val(0);
  });

  $selectCityPopover.find('.btn-select').on('click', () => {
    $selectCityForm.focus().click();
  });

  $selectCityForm.on('change', () => {
    console.log('Form was change');
  });
}

export default InitPopovers;
