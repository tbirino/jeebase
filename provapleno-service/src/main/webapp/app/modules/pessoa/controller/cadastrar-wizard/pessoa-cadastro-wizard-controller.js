'use strict';



angular.module('pocJEE.pessoa').controller('PessoaCadastrarWizardController',
    ['$scope', '$state', 'AlertsManager', '$previousState', '$translatePartialLoader', '$translate', '$rootScope', 'WizardControll', '$modal', '$stateParams','PessoaService',
    function ($scope, $state, AlertsManager, $previousState, $translatePartialLoader, $translate, $rootScope, WizardControll, $modal, $stateParams,PessoaService ) {
        var self = this;        
        /*
		{
			name: '',
			status: [],
			text: '',
			description: ''
		}
        */
        $scope.wizard = {};
        $scope.wizard.gravar = function(){

            var pessoaVo = {
                    
                "razaoSocial": "tes", 
                "cnpj": "",
            
                "contato": {
                    "email": "tes@e",
                    "site": "www",
                    "telefoneResidencial": "11111111111",
                    "telefoneCelular": "11111111111" 
               },
                
                "endereco": { 
                     "rua": "sasaasa", 
                     "numero": "12", 
                     "bairro": "saa",
                     "cidade": "sa", 
                     "cep": "11111111",
                     "complemento": "1", 
                     "uf": "MG" 
                } 
            };

            

        };
        


        var wizardConfig = {
            steps: [
                {
                    name: 'app.private.pessoa.wizard.dados-gerais',
                    status: [],
                    text: 'Dados gerais',
                    description: 'Informações gerais da pessoa',
                    validate: true
                },
                {
                    name: 'app.private.pessoa.wizard.contato',
                    status: ['disabled'],
                    text: 'Contato',
                    description: 'E-mail, telefone, email, etc..',
                    validate: true
                },
                {
                    name: 'app.private.pessoa.wizard.endereco',
                    status: ['disabled'],
                    text: 'Endereço',
                    description: 'Endereço da pessoa',
                    validate: true
                },
                {
                    name: 'app.private.pessoa.wizard.resumo',
                    status: ['disabled'],
                    text: 'Validação',
                    description: 'Confirme as informações digitadas',
                    validade: true
                }
            ],
            controllState: 'app.private.pessoa.wizard',
            validate: ''
        };

        if( $state.params.reset == true ){  
            $state.params.wizard = new WizardControll(wizardConfig);
            $state.params.pessoa = { tipo: '' };
            $state.params.reset = false;            

            $state.params.wizard.goNext();
        }else {
            if( $state.params.wizard == null ){
                return $state.go(wizardConfig.controllState, { reset: true } );
            }
        }
        $scope.wizard = $state.params.wizard;
        $scope.pessoa = $state.params.pessoa;    


        $scope.wizard.validate = function(success){
            return success();
        };        

        
        //Atualiza os dados do state
        var destroy = $scope.$on('$destroy', function(){
            $state.params.wizard = $scope.wizard;
            $state.params.pessoa = $scope.pessoa;   
            destroy();         
        });
    }]
);