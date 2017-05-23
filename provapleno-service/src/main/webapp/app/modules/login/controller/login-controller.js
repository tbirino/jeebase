'use strict';

angular.module('pocAngularMaterial.login').controller('LoginController', ['$scope', '$state', 'AlertsManager', function ($scope, $state, AlertsManager) {
	var self = this;

	$scope.login = function(){
		//$state.go( 'app.private.home', {}, { reload: true } );

	};

	console.log( this );

	self.testeAlerta = function(){
		AlertsManager.addSuccess('Login Teste!');
	};
}]);
