'use strict';

angular.module('pocJEE.pessoa').controller('PessoaCadastrarWizardDadosPessoaFisicaController',
    ['$scope', '$state', 'AlertsManager', '$previousState', '$timeout','PessoaService',
    function ($scope, $state, AlertsManager, $previousState, $timeout,PessoaService ) {
        var self = this;

        $scope.wizard.gravar = function(){
            //Chamar o serviço de salvar, pessoa está disponivel atravéz de:
            //Lembrando que todos os items estarão disponiveis (se existirem)
            //contato, endereco.
            //Pegar somente os que você vai usar
            //var pessoaVo = { nome: $scope.pessoa.nome, cpf: $scope.pessoa.cpf, ....etc }
                var pessoaVo = {
                "nome":$scope.pessoa.nome,
                "cpf":$scope.pessoa.cpf,
                "rg":$scope.pessoa.rg
            };  


            PessoaService.salvarPessoaFisica(pessoaVo, function(success){
                console.log('Pessoa Fisica salva com sucesso ->', success);
            });
            console.log( $scope.pessoa );

            //Para ir para a próxima página
            $scope.wizard.next();
        };
        $scope.wizard.validate = function(success){
            $timeout( function(){
                if( !$scope.pessoa.nome || !$scope.pessoa.cpf ){
                    return $scope.wizard.invalid('Arrume o nome ou o cpf!');
                }

                return success();
            }, 1000 );                       
        };
        $scope.wizard.invalid = function(message){
            AlertsManager.addError(message);
        };
    }]
);