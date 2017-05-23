angular.module('pocAngularMaterial', [
  'ngMaterial', 'oc.lazyLoad', 'ui.router', '$config',

  'pocAngularMaterial.main',
  'pocAngularMaterial.login',
  'pocAngularMaterial.pessoa'
  ])
    .config(['$mdThemingProvider', '$mdIconProvider', '$ocLazyLoadProvider', '$stateProvider', '$urlRouterProvider', 
    function($mdThemingProvider, $mdIconProvider, $ocLazyLoadProvider, $stateProvider, $urlRouterProvider){

        $mdIconProvider
            .defaultIconSet("./assets/svg/avatars.svg", 128)
            .icon("menu"       , "./assets/svg/menu.svg"        , 24)
            .icon("share"      , "./assets/svg/share.svg"       , 24)
            .icon("google_plus", "./assets/svg/google_plus.svg" , 512)
            .icon("hangouts"   , "./assets/svg/hangouts.svg"    , 512)
            .icon("twitter"    , "./assets/svg/twitter.svg"     , 512)
            .icon("phone"      , "./assets/svg/phone.svg"       , 512);

        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('orange');

        $mdThemingProvider.theme('docs-dark')
            .primaryPalette('orange')
            .dark();

        $ocLazyLoadProvider.config({
            debug: true,
            events: true
        });

    $urlRouterProvider.otherwise('/private/home');


    $stateProvider.state('app', {
      url: '',
      abstract: true,
      template: '<ui-view flex layout="row"/>',
      resolve:  {
        services: function($ocLazyLoad){
          return $ocLazyLoad.load(
          {
            name: 'pocAngularMaterial',
            files: [
              'directives/alerts/alerts-manager.js',
              'directives/alerts/alerts.js'
            ]
          })
        }
      }
      /*,
      params: {
      },
      ncyBreadcrumb: {
        skip: true
      }*/
    });

    /*
    $stateProvider.state('app', {
      url: '/app',
      //abstract: true,
      //template: '<ui-view/>',
      templateUrl: 'src/app.html',
      controller: 'UserController',
      controllerAs: 'ul',
      resolve:  {
        services: function($ocLazyLoad){
          return $ocLazyLoad.load(
          {
            name: 'users',
            files: [
              "./src/users/UserController.js",
              "./src/users/UserService.js"
            ]
          })
        }
      }
    })
    .state('app.menu', {
      url: '/menu',
      //abstract: true,
      //template: '<ui-view/>',
      templateUrl: 'src/details.html',
      resolve:  {
        services: function($ocLazyLoad){
          return $ocLazyLoad.load(
          {
            name: 'users',
            files: [
            ]
          })
        }
      }
    });
    */
  }]);
