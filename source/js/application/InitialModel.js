'use strict';

import {Model} from 'backbone';

class InitialModel extends Model{
    constructor(options){
        super(options);
        console.log('Constructor initial model');

        this.url = 'http://back.tests.app/initial';

        this.on('sync' , (data) => {
            console.log('Synced model data');
        });
    }
}

export default InitialModel;