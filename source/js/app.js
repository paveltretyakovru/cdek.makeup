import Backbone 	from 'backbone';
import $ 			from 'jquery';

import Application 	from 'application';
import Router 		from 'router';

let app 			= new Application({ router : new Router() });

Backbone.history.start();