import $ from 'jquery';
import popover from 'popover';
import 'webui-popover';
import 'jquery.cookie';

let InitPopovers = () => {

// ############# SELECT CITY POPOVER ##############################
  let $selectCityPopover = $('#select-city-popover');
  let $confirmSpbBlock = $('#confirm-spb-block');
  let $inputCityBlock = $('#input-city-block');
  let $inputGoogleGeo = $('#input-google-geo');
  let $fieldForPopoverCity = $('#field-for-popover-city');
  let $buttonYesSelectCity = $selectCityPopover.find('.btn-yes');
  let $buttonSelectCity = $selectCityPopover.find('.btn-select');
  let $buttonsSelectCity = $selectCityPopover.find('button');
  let $selectedCityLink = $('#selected-city');

  // Показать скрыть блок с полем ввода города
  let showInputCityBlock = () => {
    $confirmSpbBlock.css('display', 'none');
    $inputCityBlock.css('display' , 'flex');
  }
  let hideInputCityBlock = () => {
    $inputCityBlock.css('display' , 'none');
    $confirmSpbBlock.css('display', 'block');
  };

  $fieldForPopoverCity.webuiPopover({url: '#select-city-popover', trigger: 'manual', placement: 'bottom-left'});
  $fieldForPopoverCity.webuiPopover('show');

  $selectedCityLink.on('click', () => {
    $fieldForPopoverCity.webuiPopover('show');
  });

  // $buttonsSelectCity.on('click', () => $fieldForPopoverCity.webuiPopover('hide'));
  $buttonYesSelectCity.on('click', () => {
    $selectedCityLink.text('Санкт-Петербург, Россия');
    $fieldForPopoverCity.webuiPopover('hide');
    hideInputCityBlock();
  });

  // Нажата кнопка выбрать город
  $buttonSelectCity.on('click', () => {
    $confirmSpbBlock.hide();
    showInputCityBlock();
  });

  $('.btn-geo-yes').on('click' , () => {
    $selectedCityLink.text($inputGoogleGeo.val());
    $fieldForPopoverCity.webuiPopover('hide');
    hideInputCityBlock();
  });
// #############################################################

// ADD SERVISEC
  $('.add-services img').webuiPopover({trigger: 'hover'});
}

export default InitPopovers;
