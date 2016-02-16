import { ItemView } from 'backbone.marionette';
import Template 	from 'main/main.hbs';

export default ItemView.extend({
	el 			: 'body' ,
	template 	: Template
});