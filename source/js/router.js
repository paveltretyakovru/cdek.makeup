'use strict';
import _ from 'lodash';
import Backbone from 'backbone';
import { Router } from 'backbone-routing';
import ExampleRoute from 'example/route';

/**
 * @member (Marionette.Region)  contentRegion регион для основного контента
 * @member (Marionette.Region)  menuRegion регион для меню
 * @author Tretyakov Pavel <tretyakovpavel.ru@gmail.com>
 */
let  router = Router.extend( {

  /**
   * @member routes Объект для
   * @return (object) Возвращает объект с маршрутами
   */
  routes: {
    '': 'example' ,
  },

  /**
   * @method initialize Метод для инициализиации главного роутера приложения
   * @param (mixed) options
   * @return (mixed) Инициализирует основные регионы приложения
   */
  initialize(options) {
    this._initialData = options.initialData || {};
    this._contentRegion = options.contentRegion || {};

    this.listenTo( this , 'before:enter' , this.onBeforeEnterRoute );
    this.listenTo( this , 'enter' , this.onEnterRoute );
    this.listenTo( this , 'error' , this.onErrorRoute );
  } ,

  onBeforeEnterRoute() {
    return this;
  },
  onEnterRoute() {
    return this;
  },
  onErrorRoute(){
    console.error('Error router');
    return this;
  },

  /**
   * @method example
   * @return (mixed) Инициализирует марщут для example
   */
  example() {
    return new ExampleRoute({ contentRegion : this._contentRegion });
  },

});

export default router;
