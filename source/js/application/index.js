'use strict';
import $ 				from 'jquery';
import _ 				from 'lodash';
import Radio 			from 'backbone.radio';
import {Application}	from 'backbone.marionette';

let routerChannel = Radio.channel('router');

export default Application.extend({
	initialize(){
		this.$body = $(document.body);

		this.listenTo( this.router , 'before:enter' , this.onBeforeEnterRoute );
		this.listenTo( this.router , 'enter' , this.onEnterRoute );
		this.listenTo( this.router , 'error' , this.onErrorRoute );		
	} ,

	onBeforeEnterRoute() {
		// Before route
	},

	onEnterRoute() {
		// Enter route
	},

	onErrorRoute() {
		// Error route
	}
});
