import { ItemView } 		from 'backbone.marionette';
import Template 				from 'example/example.hbs';
import Rivets 					from 'rivets';
import RivetsBacbkone		from 'rivets-backbone-adapter';
import Model 						from 'example/example.model';

export default ItemView.extend({
	el 				: 'body' ,
	template 	: Template ,
	model 		: new Model() ,

	initialize(){
		this.model.set('name' , 'Tretyakov Pavel');
	} ,

	onRender(){
		this.binding = Rivets.bind( this.el , { model : this.model } );
	}
});
