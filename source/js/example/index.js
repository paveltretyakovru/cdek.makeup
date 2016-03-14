import { ItemView }     from 'backbone.marionette';
import Template         from 'example/example.hbs';
import Rivets           from 'rivets';
import RivetsBacbkone   from 'rivets-backbone-adapter';
import Model            from 'example/example.model';

export default ItemView.extend({
  template  : Template ,
  model     : new Model() ,

  initialize(options) {    
    this.model.set('name', 'Tretyakov Pavel');
  },

  onRender() {
    this.binding = Rivets.bind(this.el, {model: this.model});
  },
});
