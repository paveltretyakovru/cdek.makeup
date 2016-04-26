'use strict';

// Собираем параметры для autocomplete полей с городами
let getAutocopmpelteOptions = ($element,$hiddenInput) => {
  let autocompleteUrl = `http://api.cdek.ru/city/getListByTerm/jsonp.php?callback=?`;

  return {
    source : (request, response) => {
      $.ajax({
        url: autocompleteUrl,
        dataType: `jsonp`,
        data: {
          q: () => { return $element.val() },
          name_startsWith: () => { return $element.val() },
        },
        success: (data) => {
          response($.map(data.geonames, (item) => {
            return {
              label: item.name,
              value: item.name,
              id: item.id,
            }
          }));
        }
      });
    },
    minLength: 1,
    select: (event, ui) => {
      $hiddenInput.val(ui.item.id);
      $element.trigger('change');
    }
  }
}

export default getAutocopmpelteOptions;
