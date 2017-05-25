'use strict';

/**
 * @ngdoc overview
 * @name frontendApp
 * @description
 * # frontendApp
 *
 * Main module of the application.
 */
angular
  .module('frontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'toastr',
    'restangular',
    'ngTable',
    'ui.bootstrap',
    'ui.select'
  ])
  .config(function ($routeProvider, toastrConfig, RestangularProvider) {

    RestangularProvider.setBaseUrl('http://localhost:8080/backend-provapleno/rest');

    angular.extend(toastrConfig, {
      autoDismiss: false,
      containerId: 'toast-container',
      maxOpened: 0,
      newestOnTop: true,
      positionClass: 'toast-top-right',
      preventDuplicates: false,
      preventOpenDuplicates: false,
      target: 'body'
    });

    $routeProvider
      .when('/', {
        templateUrl: 'views/manter-medico/listar-medicos.html',
        controller: 'ListarMedicosController',
        controllerAs: 'vm'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
