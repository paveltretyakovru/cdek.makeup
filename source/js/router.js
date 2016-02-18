import Backbone 			from 'backbone';
import { Router } 		from 'backbone-routing';
import ExampleRoute 	from 'example/route';
import BackboneEvents	from 'modules/backbone/route-events';

export default Router.extend({
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
