'use strict';

angular.module('pocJEE.pessoa').controller('PessoaCadastrarWizardDadosPessoaJuridicaController', 
    ['$scope', '$state', 'AlertsManager', '$previousState','PessoaService',
    function ($scope, $state, AlertsManager, $previousState, PessoaService ) {
        var self = this;
        
        $scope.wizard.gravar = function(){ 
        	
        	var pessoaVo = {
        		"cnpj": $scope.pessoa.cnpj,
        		"razaoSocial": $scope.pessoa.razaoSocial
        	};

        	PessoaService.salvarPessoaJuridica(pessoaVo, function(success){
        		console.log('Pessoa Juridica salva com sucesso->', success);
        	}); 

        	$scope.wizard.next();

		};

        $scope.wizard.validate = function(success){
            return success();
        };
    }]
);