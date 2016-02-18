import { Router } 	from 'backbone-routing';
import ExampleRoute 	from 'example/route';

export default Router.extend({
	routes : {
		''	: 'example'
	} ,

	example(){
		return new ExampleRoute();
	}
});
