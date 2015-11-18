let config = function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider

  .state('root', {
    abstract: true,
    templateUrl: 'templates/layout.tpl.html'

  })

  .state('root.home', {
    url: '/',
    controller: 'HomeController as vm',
    templateUrl: 'templates/home.tpl.html'
  })

  .state('root.about', {
    url: '/about',
    controller: 'AboutController as vm',
    templateUrl: 'templates/about.tpl.html'
  });
};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;