import { Route } 	from 'backbone-routing';
import View 		from 'main';

export default Route.extend({

	render(){
		this.view = new View();
		this.view.render();
	}
	
});