import angular from 'angular';
import 'angular-ui-router';

import config from './config';

import HomeController from './controllers/home.controller';
import AboutController from './controllers/about.controller';

angular
  .module('app', ['ui.router'])
  .config(config)
  .controller('HomeController', HomeController)
  .controller('AboutController', AboutController)
  ;

console.log('Hello, World');
