import $ from 'jquery';
import popover from 'popover';
import 'webui-popover';

let InitPopovers = () => {
  let $selectCityForm = $('#select-my-city');
  let $selectCityPopover = $('#select-city');

  $('.add-services span').webuiPopover({trigger: 'hover'});
  $selectCityForm.webuiPopover({url: '#select-city', trigger: 'manual'});

  $selectCityForm.webuiPopover('show');

  $selectCityPopover.find('button').on('click', () => {
    $selectCityForm.webuiPopover('hide');
  });

  $selectCityPopover.find('.btn-select').on('click', () => {

  });
}

export default InitPopovers;
