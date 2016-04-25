'use strict';
import $ from 'jquery';
import 'jquery-ui-browserify';
import f2j from 'form2js';
import 'json2ify';

window.form2js = f2j.form2js;

let InitCalculator = () => {
  console.log('Init calculator');

  $(document).ready(function(){

    $("#city").autocomplete({
			source : function(request, response) {
				$.ajax({
					url : "http://api.cdek.ru/city/getListByTerm/jsonp.php?callback=?",
					dataType : "jsonp",
					data : {
						q : function() {
							return $("#city").val()
						},
						name_startsWith : function() {
							return $("#city").val()
						}
					},
					success : function(data) {
						response($.map(data.geonames, function(item) {
							return {
								label : item.name,
								value : item.name,
								id : item.id
							}
						}));
					}
				});
			},
			minLength : 1,
			select : function(event, ui) {
				//console.log("Yep!");
				$('#receiverCityId').val(ui.item.id);
			}
		});

    $('#cdek').submit(function(event) {
      event.preventDefault();

			var formData = form2js('cdek', '.', true, function(node) {
				if(node.id && node.id.match(/callbackTest/)) {
					return {
						name : node.id,
						value : node.innerHTML
					};
				}
			});
			var formDataJson = JSON.stringify(formData);
			// console.log(JSON.stringify(formData));
			document.getElementById('testArea').innerHTML = 'Отправляемые данные: <br />' + JSON.stringify(formData, null, '\t');

			$.ajax({
				url : 'http://api.edostavka.ru/calculator/calculate_price_by_jsonp.php',
				jsonp : 'callback',
				data : {
					"json" : formDataJson
				},
				type : 'GET',
				dataType : "jsonp",
				success : function(data) {
				    console.log(data);
				    if(data.hasOwnProperty("result")) {
						document.getElementById('resArea').innerHTML = 'Цена доставки: ' + data.result.price + '<br />Срок доставки: ' + data.result.deliveryPeriodMin + ' - ' + data.result.deliveryPeriodMax + 'дн. ' + '<br />Планируемая дата доставки: c ' + data.result.deliveryDateMin + ' по ' + data.result.deliveryDateMax + '<br />id тарифа, по которому произведён расчёт: ' + data.result.tariffId + '<br />';
					} else {
						for(var key in data["error"]) {
							// console.log(key);
							// console.log(data["error"][key]);
							document.getElementById('resArea').innerHTML = document.getElementById('resArea').innerHTML+'Код ошибки: ' + data["error"][key].code + '<br />Текст ошибки: ' + data["error"][key].text + '<br /><br />';
						}
					}
				}
			});
			return false;
		});

  });
}

export default InitCalculator;
