'use strict';
import Backbone from 'backbone';
import {ItemView} from 'backbone.marionette';

class MenuView extends ItemView{
    constructor(options){
        super(options);
    }

    get template(){
        return '<div>Template from MenuView</div>';
    }
}

export default MenuView;