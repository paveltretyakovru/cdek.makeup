import Backbone 			from 'backbone';
import { Router } 		from 'backbone-routing';
import ExampleRoute 	from 'example/route';
import BackboneEvents	from 'modules/backbone/route-events';

export default Router.extend({
	initialize(){
		console.log('Initialize router');
	} ,

	before(){

	} ,

	after(){

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
