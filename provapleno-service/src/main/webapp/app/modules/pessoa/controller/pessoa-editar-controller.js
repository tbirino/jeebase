'use strict';
/**
 * @ngdoc function
 * @name angularDemo.controller:PessoaController
 * @description
 * # PessoaController
 * Controller of the angularDemo
 */
angular.module('pocAngularMaterial.pessoa').controller('PessoaEditarController',
    ['$scope', '$filter', '$state', 'PessoaService', 'AlertsManager', '$previousState', '$translate', '$translatePartialLoader',
    function ($scope, $filter, $state, PessoaService, AlertsManager, $previousState, $translate,$translatePartialLoader ) {
        var self = this;
        
        $translatePartialLoader.addPart('pessoa/language');

        $translate.refresh();

        //Salva o status da consulta
        if( $previousState.get() && $previousState.get().state.name == 'app.private.pessoa.consultar' ){
            $previousState.memo("pessoa.consultar");
        }

        //Id para aparecer no breadcumb
        $scope.pessoaId = $state.params.id;

        PessoaService.obterPorId({id: $state.params.id}, function(data){
            self.pessoa = data;
        })

        //Função para voltar para o estado anterior (se existir)
        $scope.voltar = function(){ 
            $state.go('app.private.pessoa.visualizar', { id: self.pessoa.id } );
        }


        this.salvar = function(pessoa){
            //pessoa.id = parseInt(pessoa.id);
            PessoaService.salvar(pessoa, function(result){
                $scope.voltar();
            });
        }
    }]
);