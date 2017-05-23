(function(){
	'use strict';

	angular.module('pocAngularMaterial.login', ['oc.lazyLoad', 'ui.router', 'ngMaterial'])
	  
	.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
		$stateProvider.state('app.public.login', {
			url: '/login',
			templateUrl:  'modules/login/view/login-view.html',
			controller: 'LoginController',
			controllerAs: 'loginCtrl',
			resolve:  {
		        login: function($ocLazyLoad){
					return $ocLazyLoad.load({
						name: 'pocAngularMaterial.login',
						files: [
							'modules/login/controller/login-controller.js'
						]
					})
		        }
		    }
		})
	}]);
})();