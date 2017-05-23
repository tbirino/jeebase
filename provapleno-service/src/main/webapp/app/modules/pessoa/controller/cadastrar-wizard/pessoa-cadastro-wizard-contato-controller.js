'use strict';

angular.module('pocJEE.pessoa').controller('PessoaCadastrarWizardContatoController',
    ['$scope', '$state', 'AlertsManager', '$previousState','PessoaService',
    function ($scope, $state, AlertsManager, $previousState, PessoaService ) {
        var self = this;
        
        $scope.wizard.gravar = function(wizardCtrl){

            var contatoVo = {
                "email": $scope.pessoa.contato.email,
                "site":$scope.pessoa.contato.site,
                "telefoneResidencial":$scope.pessoa.contato.telefoneResidencial, 
                "telefoneCelular":$scope.pessoa.contato.telefoneCelular
            };

            PessoaService.salvarContato(contatoVo, function(success){
                console.log('Contato salvo com sucesso ->', success);
            });
             $scope.wizard.next();

        };
        $scope.wizard.validate =  function(success){
            return success();
        };
        $scope.wizard.invalid = function(){
        }

    }]
);
