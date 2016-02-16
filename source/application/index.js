import $ 				from 'jquery';
import _ 				from 'lodash';
import Radio 			from 'backbone.radio';
import {Application}	from 'backbone.marionette';
import LayoutView 		from 'application/layout';

let routerChannel = Radio.channel('router');

export default Application.extend({
	regions : {
		regionMain : 'body'
	} ,

	initialize(){
		this.$body = $(document.body);
	}
});