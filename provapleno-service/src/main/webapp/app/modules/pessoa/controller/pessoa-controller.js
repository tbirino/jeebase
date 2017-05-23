'use strict';
/**
 * @ngdoc function
 * @name angularDemo.controller:PessoaController
 * @description
 * # PessoaController
 * Controller of the angularDemo
 */
angular.module('pocAngularMaterial.pessoa').controller('PessoaController',
    ['$scope', '$state', 'AlertsManager', '$translatePartialLoader', '$translate', 
    function ($scope, $state, AlertsManager, $translatePartialLoader, $translate ) {
        var self = this;
        
        $scope.window = {};
        $scope.window.title = "window_title";

        $translatePartialLoader.addPart('pessoa/language');
        $translate.refresh();
    }]
);