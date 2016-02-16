import { Router } 	from 'backbone-routing';
import MainRoute 	from 'main/route';

export default Router.extend({
	routes : {
		''	: 'main'
	} ,

	main(){
		return new MainRoute();
	}
});