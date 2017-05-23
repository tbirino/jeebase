'use strict';

angular.module('pocJEE.pessoa').controller('PessoaCadastrarWizardDadosGeraisController',
    ['$scope', '$state', 'AlertsManager', '$previousState',
    function ($scope, $state, AlertsManager, $previousState ) {
        var self = this;

        $scope.wizard.gravar = function(wizardCtrl){
            AlertsManager.add({type: 'primary', msg: 'Escolha um tipo de pessoa!'} );
        };
        $scope.wizard.validate = function(success){
            return success();
        };

        $scope.pessoaJuridica = function(){
            $scope.wizard.steps[0].name = 'app.private.pessoa.wizard.dados-gerais.pessoa-juridica'; 
            $scope.pessoa.tipo = 'juridica';
        };
        $scope.pessoaFisica = function(){
            $scope.wizard.steps[0].name = 'app.private.pessoa.wizard.dados-gerais.pessoa-fisica'; 
            $scope.pessoa.tipo = 'fisica';
        }
    }]
);