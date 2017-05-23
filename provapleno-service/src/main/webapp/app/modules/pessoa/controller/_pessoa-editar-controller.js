'use strict';
/**
 * @ngdoc function
 * @name angularDemo.controller:PessoaController
 * @description
 * # PessoaController
 * Controller of the angularDemo
 */
angular.module('pocJEE.pessoa').controller('PessoaEditarController_',
    ['$scope', '$state', 'PessoaService', 'AlertsManager','$translate','$translatePartialLoader', function ($scope, $state, PessoaService, AlertsManager, $translate,$translatePartialLoader) {

        $translatePartialLoader.addPart('pessoa/language');

        $translate.refresh();

        $scope.pessoa = $state.params.data;

        $scope.gravar = function () {
            var pessoaVo = {
                //"id":null,
                "nome":"Teste AE!",
                "rg":"Missing-nin",
                "cpf":"22222222222",
                //"imagemUrl":"http://www.ctis.com.br/templates/ctis/img/logo.png"
            };

            console.log($scope.pessoa);

            PessoaService.salvar(pessoaVo, function(success){
                console.log('Salvo com sucesso ->', success);
            });
        };

        $scope.excluir = function () {

            PessoaService.excluir($scope.pessoa);
        };

        $scope.log = function () {

            PessoaService.log();
        };

        $scope.editar = function (pessoa) {

            $scope.pessoa = pessoa;
        };

        $scope.voltar = function () {
            $state.go('app.pessoa.consultar');
        };

        $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
            console.log("Mudando de estado");
        });

        this.tab = 1;

        this.selectTab = function (setTab){
            this.tab = setTab;
        };
        this.isSelected = function(checkTab) {
            return this.tab === checkTab;
        };

        

    }]);
