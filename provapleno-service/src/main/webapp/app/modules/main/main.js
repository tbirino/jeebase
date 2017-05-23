  'use strict';


angular.module('pocAngularMaterial.main', ['oc.lazyLoad', 'ui.router', 'ngMaterial' ])

.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

	$stateProvider.state('app.private.home',{
		url: '/home',		
		templateUrl: 'modules/main/view/home.html',
		resolve:  {
			main: [ '$ocLazyLoad', function($ocLazyLoad) {
				//console.log(privateCore);
				return $ocLazyLoad.load({
					name: 'pocAngularMaterial.main',
					files: [
						"modules/main/controller/main-controller.js",
              			"modules/main/service/main-service.js"
					]
				});
			}]
		},
		ncyBreadcrumb: {
			label: 'Home'
        }	
	})
}]);

  