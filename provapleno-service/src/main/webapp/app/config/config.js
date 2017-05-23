'use strict';

angular.module('$config', [
	'oc.lazyLoad',
	'ui.router',
  'pascalprecht.translate'
])

.config(function($translateProvider, $translatePartialLoaderProvider){

  	$translateProvider.useLoader('$translatePartialLoader', {
  		  urlTemplate: '/modules/{part}/{lang}.json'
  	});

  	$translateProvider.preferredLanguage('pt-BR');
})
/*
.config(function($breadcrumbProvider) {
    $breadcrumbProvider.setOptions({
    	prefixStateName: 'app.private',
     	template:  
     	'<div class="breadcrumb">' +
        	'<a ng-repeat="step in steps" class="btn btn-flat" ui-sref="{{step.name}}" ng-disabled="$last">{{step.ncyBreadcrumbLabel}}</a>' +
      	'</div>',
      	template: 'bootstrap3'
    });
})*/

.config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $httpProvider) {
	$stateProvider.state( 'app.public', {
		url: '/public',
		abstract: true,
		template: '<ui-view flex/>'
	})
	.state( 'app.private', {
		url: '/private',
		abstract: true,
		controller: 'UserController',
      	controllerAs: 'ul',
		templateUrl: 'modules/main/view/main.html',
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
		//deepStateRedirect: true
	})
}]).constant('CONFIG_APP', {
   contexto:'backend',
   apiEndpoint:'http://localhost:8080/backend/rest/',
   host:'http://localhost:8080'
});