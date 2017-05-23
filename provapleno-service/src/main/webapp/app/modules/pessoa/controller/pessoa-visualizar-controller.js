'use strict';
/**
 * @ngdoc function
 * @name angularDemo.controller:PessoaController
 * @description
 * # PessoaController
 * Controller of the angularDemo
 */
angular.module('pocAngularMaterial.pessoa').controller('PessoaVisualizarController',
    ['$scope', '$filter', '$state', 'PessoaService', 'AlertsManager', '$previousState', '$location', 
    function ($scope, $filter, $state, PessoaService, AlertsManager, $previousState, $location ) {
        var self = this;

        //Salva o status da consulta
        if( $previousState.get() && $previousState.get().state.name == 'app.private.pessoa.consultar' ){
            $previousState.memo("pessoa.consultar");
        }


        if( !$state.params.id || $state.params.id == "" ){
            $state.go('/private/pessoa/consultar');
        }

        //Id para aparecer no breadcumb
        $scope.pessoaId = $state.params.id;

        PessoaService.obterPorId({id: $state.params.id}, function(data){
            self.pessoa = data;
        })


        
        
        

        //Função para voltar para o estado anterior (se existir)
        $scope.voltar = function(){
            if( $previousState.get("pessoa.consultar") != null ){                
                $previousState.go("pessoa.consultar");
            }else {
                $state.go("^.consultar");
            }
        }


    }]
);