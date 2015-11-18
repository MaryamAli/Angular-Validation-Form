import angular from 'angular';
import 'angular-ui-router';

import config from './config';

import HomeController from './controllers/home.controller';
import AboutController from './controllers/about.controller';
import ContactsAddController from './controllers/contactsAdd.controller';

import PARSE from './constants/parse.constant';

import ContactService from './services/contact.service';

angular
  .module('app', ['ui.router'])
  .config(config)
  .constant('PARSE', PARSE)
  .controller('HomeController', HomeController)
  .controller('AboutController', AboutController)
  .controller('ContactsAddController', ContactsAddController)
  .service('ContactService', ContactService)
  ;

console.log('Hello, World');
