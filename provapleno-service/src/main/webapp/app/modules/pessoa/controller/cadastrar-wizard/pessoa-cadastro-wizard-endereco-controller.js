'use strict';

angular.module('pocJEE.pessoa').controller('PessoaCadastrarWizardEnderecoController',
    ['$scope', '$state', 'AlertsManager', '$previousState', '$translate', '$translatePartialLoader','PessoaService',
    function ($scope, $state, AlertsManager, $previousState, $translate, $translatePartialLoader,PessoaService) {
        var self = this;        

        $scope.wizard.gravar = function(){
            var enderecoVo = {
                "cidade":$scope.pessoa.endereco.cidade,
                "complemento":$scope.pessoa.endereco.complemento,
                "cep":$scope.pessoa.endereco.cep,
                "bairro": $scope.pessoa.endereco.bairro,
                "uf":$scope.pessoa.endereco.uf
            };

            PessoaService.salvarEndereco(enderecoVo, function(success){
                console.log('ENDERECO SALVO->', success);
            });

             $scope.wizard.next();

        };
        $scope.wizard.validate = function(success){
            var fields = [ 'rua', 'bairro' ];

            if( !$scope.pessoa.endereco ){
                return $scope.wizard.invalid(fields);
            }
            
            var errorFields = [];
            angular.forEach( fields, function( value, key ){
                if( !$scope.pessoa.endereco[value] ){
                    errorFields.push(value);
                }
            });

            if( errorFields.length > 0 ){
                return $scope.wizard.invalid(errorFields);
            }

            return success();
        };
        $scope.wizard.invalid = function(fields){
            var fields = fields || [];
            //alert( "Arrume os campos " + fields.join( ', ' ) );
            AlertsManager.addError("Arrume os campos " + fields.join( ', ' ));
        };
    }]
);
