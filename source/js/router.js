import Backbone 		from 'backbone';
import { Router } 		from 'backbone-routing';
import ExampleRoute 	from 'example/route';

let  router = Router.extend({
	initialize(){
		console.log('Initialize router');
	} ,

	before(){
		// Method action before routing
	} ,

	after(){
		// Method action after routing
	} ,

	routes : {
		''	: 'example' ,
		'test' : 'test' ,
		'test1': 'test1' ,
	} ,

	example(){
		return new ExampleRoute();
	}
});

export default router;