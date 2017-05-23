  'use strict';


angular.module('pocJEE.resource', ['oc.lazyLoad', 'ui.router','ct.ui.router.extras.previous', 'ct.ui.router.extras.statevis', 'ncy-angular-breadcrumb'])

.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

	$stateProvider.state('app.private.form',{
		templateUrl: 'modules/resource/view/form.html',
		url: '/form',
		ncyBreadcrumb: {
			label: 'Form',
			parent: 'app.private.home'
        }		
	})
	.state('app.private.blank',{
		templateUrl: 'modules/resource/view/blank.html',
		url: '/blank',
		controller: [ '$scope', '$previousState', '$stateParams', function( $scope, $previousState, $stateParams){
			$scope.voltar = function(){
				if( $previousState.get() != null )
					$previousState.go();
			}		
			$scope.teste =  $stateParams.data ? $stateParams.data.teste : '';
		}],
		ncyBreadcrumb: {
			label: 'Bank Page',
			parent: 'app.private.home'
        }	
	})
	.state('app.private.table',{
		templateUrl: 'modules/resource/view/table.html',
		url: '/table',
		controller: ['$scope', '$stateParams', function( $scope, $stateParams){
			$scope.teste =  $stateParams.data ? $stateParams.data.teste : '';
		}],
		ncyBreadcrumb: {
			label: 'Table',
			parent: 'app.private.home'
        }	
	})
	.state('app.private.panels-wells',{
		templateUrl: 'modules/resource/view/panels-wells.html',
		url: '/panels-wells',
		controller: ['$scope', '$stateParams', function( $scope, $stateParams){
			$scope.teste =  $stateParams.data ? $stateParams.data.teste : '';
		}],
		ncyBreadcrumb: {
			label: 'Panels Wells',
			parent: 'app.private.home'
        }	
	})
	.state('app.private.buttons',{
		templateUrl: 'modules/resource/view/buttons.html',
		url: '/buttons',
		ncyBreadcrumb: {
			label: 'Buttons',
			parent: 'app.private.home'
        }	
	})
	.state('app.private.notifications',{
		templateUrl: 'modules/resource/view/notifications.html',
		url: '/notifications',
		resolve: {
            loadMyFile: function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'pocJEE.resource',
                    files: [
                        'modules/resource/controller/teste-wizard/resource-teste-wizard-controller.js'              
                    ]
                })
            }
        },
		ncyBreadcrumb: {
			label: 'Notifications',
			parent: 'app.private.home'
        }	
	})
		//Wizard Root
	    .state('app.private.notifications.wizard', {
	        url: '/wizard',
	        controller: 'ResourceTesteWizardController',
	        controllerAs: 'wizardCtrl',
	        templateUrl: 'modules/resource/view/teste-wizard/resource-teste-wizard-view.html',
	        resolve: {
	            loadMyFile: function ($ocLazyLoad) {
	                return $ocLazyLoad.load({
	                    name: 'pocJEE.resource',
	                    files: [
	                        'modules/resource/controller/teste-wizard/resource-teste-wizard-controller.js'              
	                    ]
	                })
	            }
	        },          
	        ncyBreadcrumb: {
	            skip: true
	        }
	    })
	    	.state('app.private.notifications.wizard.step1', {
		        url: '/step1',
		        controller: 'ResourceTesteStep1Controller',
		        controllerAs: 'step1Ctrl',
		        templateUrl: 'modules/resource/view/teste-wizard/resource-teste-step1-view.html',
		        resolve: {
		            loadMyFile: function ($ocLazyLoad) {
		                return $ocLazyLoad.load({
		                    name: 'pocJEE.resource',
		                    files: [
		                        'modules/resource/controller/teste-wizard/resource-teste-step1-controller.js'              
		                    ]
		                })
		            }
		        },          
		        ncyBreadcrumb: {
		            skip: true
		        }
		    })
		    .state('app.private.notifications.wizard.step2', {
		        url: '/step2',
		        controller: 'ResourceTesteStep2Controller',
		        controllerAs: 'step2Ctrl',
		        templateUrl: 'modules/resource/view/teste-wizard/resource-teste-step2-view.html',
		        resolve: {
		            loadMyFile: function ($ocLazyLoad) {
		                return $ocLazyLoad.load({
		                    name: 'pocJEE.resource',
		                    files: [
		                        'modules/resource/controller/teste-wizard/resource-teste-step2-controller.js'              
		                    ]
		                })
		            }
		        },          
		        ncyBreadcrumb: {
		            skip: true
		        }
		    })

	.state('app.private.typography',{
		templateUrl: 'modules/resource/view/typography.html',
		url: '/typography',
		ncyBreadcrumb: {
			label: 'Typography',
			parent: 'app.private.home'
        }	
	})
	.state('app.private.icons',{
		templateUrl: 'modules/resource/view/icons.html',
		url: '/icons',
		ncyBreadcrumb: {
			label: 'Icons',
			parent: 'app.private.home'
        }	
	})
	.state('app.private.grid',{
		templateUrl: 'modules/resource/view/grid.html',
		url: '/grid',
		ncyBreadcrumb: {
			label: 'Grid',
			parent: 'app.private.home'
        }	
	})
	.state('app.private.login',{
		templateUrl: 'modules/resource/view/login.html',
		url: '/login',
		ncyBreadcrumb: {
			label: 'Login',
			parent: 'app.private.home'
        }	
	})
}]);

  