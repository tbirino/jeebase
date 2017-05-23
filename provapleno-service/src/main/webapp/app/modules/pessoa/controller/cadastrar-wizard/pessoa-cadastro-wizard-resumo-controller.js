'use strict';

angular.module('pocJEE.pessoa').controller('PessoaCadastrarWizardResumoController',
    ['$scope', '$state', 'AlertsManager', '$previousState',
    function ($scope, $state, AlertsManager, $previousState ) {
        var self = this;
        

        $scope.wizard.gravar = function(wizardCtrl){
            //$scope.pessoa.contato
        }
        $scope.wizard.validate =  function(success){
            return success();
        };
        $scope.wizard.invalid = function(){
        }

        $scope.getInformacoesPessoa = function(pessoa){
            var response = {};
            angular.forEach(pessoa, function(value, key){
                if( !angular.isObject( value ) ){
                    response[key] = value;
                }
            });
            return response;
        }
    }]
);

