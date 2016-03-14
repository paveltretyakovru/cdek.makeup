import { Route } 	from 'backbone-routing';
import View 		from 'example';

export default Route.extend({
    initialize(options) {
        console.log('Route initialize', options);
        this._contentRegion = options.contentRegion || {};
    },

	render(){
		this.view = new View();
		this._contentRegion.show(this.view);
	}
});
