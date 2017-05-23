'use strict';
/**
 * @ngdoc function
 * @name angularDemo.modules.pessoa.serice:PessoaService
 * @description # PessoaService Service of the angularDemo
 */
angular.module('pocAngularMaterial.pessoa').service('PessoaService', ['$resource', 'CONFIG_APP', function ($resource, CONFIG_APP) {

    this.rest = {
        filtro: $resource(CONFIG_APP.apiEndpoint+'pessoa/filtro', {}, {
            obterPorFiltro: {
                method: 'POST'
            }
        }),
        consulta: $resource(CONFIG_APP.apiEndpoint+'/pessoa', {}, {
            consulta: {
                page: 1,
                method: 'GET'
            },
            gravar: {
                method: 'POST'
            }
        }),
        pessoa: $resource(CONFIG_APP.apiEndpoint+'pessoa/:id', {}, {
            porId: {
                method: 'GET'
            }
        }),
        contato: $resource(CONFIG_APP.apiEndpoint+'contato', {}, {
            gravar:{
                method: 'POST'
            }
        }),
        endereco: $resource(CONFIG_APP.apiEndpoint+'endereco', {},{
            gravar:{
                method: 'POST'
            }
        }),
        pessoaJuridica: $resource(CONFIG_APP.apiEndpoint+'pessoaJuridica', {}, {
            gravar:{
                method: 'POST'
            }
        }),
        pessoaFisica: $resource(CONFIG_APP.apiEndpoint+'pessoaFisica', {}, {
            gravar: {
                method: 'POST'
            }
        }),
    };


    this.obterPorId = function (id) {

    };

    this.obterPorFiltro = function (paginacaoDTO, success) {
        this.rest.filtro.obterPorFiltro(paginacaoDTO, success, function (error) {

        });
    };

    this.obterTodos = function (filtros, success) {
        this.rest.consulta.consulta(filtros, success, function(error){
            console.log('ERROR->',error);
        });
    };

    this.excluir = function (pessoa) {
    };

    this.salvar = function (pessoa,success) {
        this.rest.consulta.gravar(pessoa, success, function(error){
            console.log('ERROR->',error);
        })
    };

    this.obterPorId = function(id, success){
        this.rest.pessoa.porId(id,success, function(error){
            console.log('ERROR POR ID->', error);
        })
    };

    this.salvarContato = function(contato,success){
        this.rest.contato.gravar(contato, success, function(error){
            console.log('ERRO SALVAR CONTATO->', error);
        });
    };

    this.salvarEndereco = function(endereco,success){
        this.rest.endereco.gravar(endereco, success, function(error){
            console.log('ERRO SALVAR ENDEREÇO->', error);
        });
    };
    
    this.salvarPessoaJuridica = function(pessoaJuridicaVo, success){
        this.rest.pessoaJuridica.gravar(pessoaJuridicaVo, success, function(error){
            console.log('ERRO SALVAR PESSOA JURIDICA->', error);
        });
    };

    this.salvarPessoaFisica = function(pessoaFisica, success){
        this.rest.pessoaFisica.gravar(pessoaFisica, success, function(error){
            console.log('ERRO SALVAR PESSOA FISICA', error);
        });
    };
}]);
