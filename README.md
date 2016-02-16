# ES6 + Browserify + Backbone.Marionete + Haml + Scss + Gulp

Frontend application template.
This is application have minimal sceleton for create full front application on Backbone.Marrionete with routes.

Also, applicateion compiled Haml , Sass files, and init simple demp server on http://localhost:4444

Dirs:
  - **source** : source  folder with all application files
    + **js** : folder woth Marionette application
    	*	**app.js** 		: main, init file. Here starting application and all includes
    	*	**router.js** 	: main system router with all routes. Required to app.js too
    	*	**application** : configure module for marionette
    	*	**main** 		: example route/view/template module for main page (''-route)
    + **haml** 				: folder with haml templates
    	* **index.haml**	: exampled index.html template
    + **sass** 				: folder with sass,scss stylesheet files
    	* **general_all.scss**	: exampled stylesheet
  - **tasks** 					: gulp tasks for compile files and init demo server
  	+ **scripts.js**			: gulp tasks for watch and compile js application
  	+ **content.js**			: gulp tasks for move media content to public folder
  	+ **layout.js**				: gulp tasks for watch and compile haml and sass files
  	+ **server-html.js**		: gulp tasks for creating test html-server
  	+ **styles.js**				: gulp tasks for comple sass files  

## Install
````
$ npm install
````
## Init
````
$ gulp
````
After init all source data completed to **public** dir. Here:
  - **bundle.js** completed javascript application (*source/js/app.js*)
  - **index.html** compiled exampled index.haml template (*source/js/haml/index.haml*)
  - **css/general_all.css** compiled exampled Scss stylesheet (*source/sass/general_all.scss*)