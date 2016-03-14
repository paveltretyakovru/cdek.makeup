'use strict';
import $ from 'jquery';
import Backbone from 'backbone';
import {Application} from 'backbone.marionette';
import Router from 'router';
import MenuView from './MenuView';
import {apihost} from 'modules/config';

class application extends Application{
  constructor(options) {
    super(options);

    // Загрузка первоначальных данных
    this.loadInitialData().then(
      
      // Загрузка данных прошла успешно
      (data) => this.onLoadInitialDataSuccess(data),

      // Ошибка во время загрузки начальных данных
      (error) => this.onLoadInitialDataError(error)
    );

    return this;
  }

  regions(){
    return {
      menuRegion: '#menu-region',
      contentRegion: '#content-region',
    }
  }

  /**
   * Событие срабатывает при старте приложения
   * @return {[type]} [description]
   */
  onStart(){
    Backbone.history.start();
    this.menuRegion.show(new MenuView());
    return this;
  }

  /**
   * Метод после успешной загрузки первоначальных данных
   * @param  {JSON} data ответ сервера
   * @return {this object} Вовзрашет сам объект
   */
  onLoadInitialDataSuccess(data){
    console.log('onLoadInitialDataSuccess', data);
    this.router = new Router({initialData: data, contentRegion : this.contentRegion});
    this.start();
    return this;
  }

  /**
   * Метод после ошибки загрузки первоначальных данных
   * @param  {JSON} error ошибка овтета
   * @return {this object} Вовзрашет сам объект
   */
  onLoadInitialDataError(error){
    console.log('Error load initial data', error);
    return this;
  }

  /**
   * Создание "обещания" которое выполнет асинхронную загрузку стартовых данных
   * @return {Promise object} Возвращает общение
   */
  loadInitialData(){
    return new Promise((resolve, reject) =>{
      return $.get(apihost).then(
        (data) => resolve(data),
        (error) => reject(error)
      );
    });
  }
}

export default application;
