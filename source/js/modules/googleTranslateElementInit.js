'use strict';

let googleTranslateElementInit = () => {
  return new google.translate.TranslateElement({pageLanguage: 'ru', includedLanguages: 'en,zh-CN,ru-RU', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
}

export default googleTranslateElementInit;
