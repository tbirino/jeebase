'use strict';
/**
 * @ngdoc function
 * @name angularDemo.controller:PessoaController
 * @description
 * # PessoaController
 * Controller of the angularDemo
 */
angular.module('pocAngularMaterial.pessoa').controller('PessoaConsultarController',
    ['$scope', '$filter', '$state', 'AlertsManager', '$location', 'PessoaService',
    function ($scope, $filter, $state, AlertsManager, $location, PessoaService ) {
        var self = this;

        $scope.window.title = "Consultar pessoa";

        this.resultQuery = {};
        this.parametrosTabela = {};

        
        //Primeira requisição -> importa o filtro do state
        $scope.query = { nome: $state.params.filtros.nome };

        this.obterPorFiltro = function(){
            $state.params.filtros.nome = $scope.query.nome;
            $state.params.filtros.cpf = $scope.query.cpf;
            $scope.parametrosTabela.$params.page = 1;

            $scope.parametrosTabela.reload();
        } 

        /*
        this.createTableParam = function(){            
            $scope.parametrosTabela = new ngTableParams(
                {
                    page: $state.params.currentPage,
                    count: $state.params.pageSize,
                    sorting: {
                        nome: 'asc'
                    }
                },
                {
                    total: 0,
                    counts: [ 10, 20],

                    getData: function ($defer, params) {
                        var count = params.count();
                        var page = params.page();
                        var total = params.total();

                        $state.params.currentPage = page;
                        $state.params.pageSize = count;

                        PessoaService.obterPorFiltro( $state.params, function(data){
                            params.total(data.totalResults);

                            var orderedData = params.sorting() ?
                                $filter('orderBy')(data.list, params.orderBy()) :
                                data.list;

                            $defer.resolve(orderedData);
                        });
                    }
                }
            );
        }
        self.createTableParam();
        */


        this.teste = function(){
            var pessoaVo = {
                "id":null,
                "nome":"Teste AE!",
                "descricao":"Missing-nin",
                "cpf":"22222222222",
                "imagemUrl":"http://www.ctis.com.br/templates/ctis/img/logo.png"
            };;

            PessoaService.salvar(pessoaVo, function(result){
                $scope.parametrosTabela.reload();
            });
        }
        //this.teste();
        
        $scope.visualizar = function(id){
            $location.path('/private/pessoa/visualizar/'+id);
        }
        $scope.editar = function(id){
            $location.path('/private/pessoa/editar/'+id);
        }

    }]);
