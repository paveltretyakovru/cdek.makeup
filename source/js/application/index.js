import $ 							from 'jquery';
import _ 							from 'lodash';
import Radio 					from 'backbone.radio';
import {Application}	from 'backbone.marionette';

let routerChannel = Radio.channel('router');

export default Application.extend({
	initialize(){
		this.$body = $(document.body);
	} ,

	onBeforeEnterRoute() {
		this.transitioning = true;
		_.defer(() => {
			if (this.transitioning) {
				nprogress.start();
			}
		});
	},

	onEnterRoute() {
		this.transitioning = false;
		this.$body.scrollTop(0);
		nprogress.done();
	},

	onErrorRoute() {
		this.transitioning = false;
		nprogress.done(true);
	}
});
