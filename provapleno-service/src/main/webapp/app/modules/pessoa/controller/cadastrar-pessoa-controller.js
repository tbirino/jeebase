'use strict';
/**
 * @ngdoc function
 * @name angularDemo.controller:PessoaController
 * @description
 * # PessoaController
 * Controller of the angularDemo
 */



 angular.module('pocAngularMaterial.pessoa').controller('CadastrarPessoaController',['$scope','PessoaService',function ($scope, PessoaService) {
     	this.tab = 1;
     	$scope.pessoa = {};
    
    this.selectTab = function (setTab){
    	this.tab = setTab;
    };
    this.isSelected = function(checkTab) {
    	return this.tab === checkTab;
    };

   $scope.gravarTeste = function() {
    
        PessoaService.salvar($scope.pessoa);
    };

}]);



