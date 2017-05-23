angular.module('pocAngularMaterial.pessoa', [

])

    .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

        $stateProvider.state('app.private.pessoa', {
            //abstract: true,
            url: '/pessoa',
            templateUrl: 'modules/pessoa/view/pessoa-view.html',
            controller: 'PessoaController',
            resolve: {
                pessoa: function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'pocAngularMaterial.pessoa',
                        files: [
                            'modules/pessoa/controller/pessoa-controller.js'
                            /*
                            'directives/telefone/telefone.js',
                            'directives/cep/cep.js',
                            'directives/cpf/cpf.js',
                            'directives/cnpj/cnpj.js',
                            'directives/text/text.js',
                            'directives/time/time.js',
                            'directives/date/date.js',
                            'directives/datetime/datetime.js'
                            */
                        ]
                    })
                }
            }
        })
            .state('app.private.pessoa.consultar', {
                url: '/consultar/',
                controller: 'PessoaConsultarController',
                controllerAs: 'pessoaConsultarCtrl',
                templateUrl: 'modules/pessoa/view/pessoa-consultar-view.html',
                params: {
                    'filtros': { nome: '', cpf: '' },
                    'currentPage': 1,
                    'pageSize': 10
                },
                resolve: {
                    consultar: function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'pocAngularMaterial.pessoa',
                            files: [
                                'modules/pessoa/service/pessoa-service.js',
                                'modules/pessoa/controller/pessoa-consultar-controller.js'                        
                            ]
                        })
                    }
                },
                ncyBreadcrumb: {
                    label: 'Pessoas',
                    parent: 'app.private.home'
                }
            });
            /*
            .state('app.private.pessoa.visualizar', {
                url: '/visualizar/:id',
                controller: 'PessoaVisualizarController',
                controllerAs: 'pessoaVisualizarCtrl',
                templateUrl: 'modules/pessoa/view/pessoa-visualizar-view.html',
                resolve: {
                    loadMyFile: function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'pocJEE.pessoa',
                            files: [
                                'modules/pessoa/controller/pessoa-visualizar-controller.js'                     
                            ]
                        })
                    }
                },
                ncyBreadcrumb: {
                    label: 'Pessoa {{pessoaId}}',
                    parent: 'app.private.pessoa.consultar'
                }
            })

            .state('app.private.pessoa.editar', {
                url: '/editar/:id',
                controller: 'PessoaEditarController',
                controllerAs: 'pessoaEditarCtrl',
                templateUrl: 'modules/pessoa/view/pessoa-editar-view.html',
                resolve: {
                    loadMyFile: function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'pocJEE.pessoa',
                            files: [
                                'modules/pessoa/controller/pessoa-editar-controller.js'                     
                            ]
                        })
                    }
                },
                ncyBreadcrumb: {
                    label: 'Editar',
                    parent: 'app.private.pessoa.visualizar'
                }
            })


            //Wizard Root
            .state('app.private.pessoa.wizard', {
                url: '/cadastrar',
                controller: 'PessoaCadastrarWizardController',
                controllerAs: 'wizardCtrl',
                templateUrl: 'modules/pessoa/view/cadastrar-wizard/pessoa-cadastro-wizard-view.html',
                resolve: {
                    loadMyFile: function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'pocJEE.pessoa',
                            files: [
                                'modules/pessoa/controller/cadastrar-wizard/pessoa-cadastro-wizard-controller.js'              
                            ]
                        })
                    },
                    pocJEE: function($ocLazyLoad){
                        return $ocLazyLoad.load({
                            name: 'pocJEE',
                            files: [
                                'services/wizard/wizard-service.js'
                            ]
                        })
                    }
                },          
                ncyBreadcrumb: {
                    label: 'Cadastrar',
                    parent: 'app.private.pessoa.consultar'
                },
                params: {
                    wizard: null,
                    pessoa: '',
                    reset: false
                }
            })
                .state('app.private.pessoa.wizard.dados-gerais', {
                    url: '/dados-gerais',
                    controller: 'PessoaCadastrarWizardDadosGeraisController',
                    templateUrl: 'modules/pessoa/view/cadastrar-wizard/pessoa-cadastro-wizard-dados-view.html',
                    resolve: {
                        loadMyFile: function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'pocJEE.pessoa',
                                files: [
                                    'modules/pessoa/controller/cadastrar-wizard/pessoa-cadastro-wizard-dados-gerais-controller.js'              
                                ]
                            })
                        }                        
                    },                                        
                    ncyBreadcrumb: {
                        label: 'Cadastrar',
                        parent: 'app.private.pessoa.consultar'
                    }
                })
                    .state('app.private.pessoa.wizard.dados-gerais.pessoa-fisica', {
                        url: '/pessoa-fisica',
                        templateUrl: 'modules/pessoa/view/pessoa-fisica-view.html',
                        controller: 'PessoaCadastrarWizardDadosPessoaFisicaController',
                        resolve: {
                            loadMyFile: function ($ocLazyLoad) {
                                return $ocLazyLoad.load({
                                    name: 'pocJEE.pessoa',
                                    files: [
                                        'modules/pessoa/controller/cadastrar-wizard/pessoa-cadastro-wizard-dados-pessoa-fisica-controller.js'              
                                    ]
                                })
                            }
                        },
                        ncyBreadcrumb: {
                            label: 'Cadastrar',
                            parent: 'app.private.pessoa.consultar'
                        }                    
                    })

                    .state('app.private.pessoa.wizard.dados-gerais.pessoa-juridica', {
                        url: '/pessoa-juridica',
                        templateUrl: 'modules/pessoa/view/pessoa-juridica-view.html',
                        controller: 'PessoaCadastrarWizardDadosPessoaJuridicaController',
                        resolve: {
                            loadMyFile: function ($ocLazyLoad) {
                                return $ocLazyLoad.load({
                                    name: 'pocJEE.pessoa',
                                    files: [
                                        'modules/pessoa/controller/cadastrar-wizard/pessoa-cadastro-wizard-dados-pessoa-juridica-controller.js'
                                    ]
                                })
                            }
                        },
                        ncyBreadcrumb: {
                            label: 'Cadastrar',
                            parent: 'app.private.pessoa.consultar'
                        }
                    })

                .state('app.private.pessoa.wizard.contato', {
                    url: '/contato',
                    templateUrl: 'modules/pessoa/view/cadastrar-wizard/pessoa-cadastro-wizard-contato-view.html',
                    controller: 'PessoaCadastrarWizardContatoController',
                    resolve: {
                        loadMyFile: function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'pocJEE.pessoa',
                                files: [
                                    'modules/pessoa/controller/cadastrar-wizard/pessoa-cadastro-wizard-contato-controller.js'        
                                ]
                            })
                        }
                    },
                    ncyBreadcrumb: {
                        label: 'Cadastrar',
                        parent: 'app.private.pessoa.consultar'
                    }
                })

                .state('app.private.pessoa.wizard.endereco', {
                    url: '/endereco',
                    templateUrl: 'modules/pessoa/view/cadastrar-wizard/pessoa-cadastro-wizard-endereco-view.html',
                    controller: 'PessoaCadastrarWizardEnderecoController',
                    resolve: {
                        loadMyFile: function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'pocJEE.pessoa',
                                files: [
                                    'modules/pessoa/controller/cadastrar-wizard/pessoa-cadastro-wizard-endereco-controller.js'        
                                ]
                            })
                        }
                    },
                    ncyBreadcrumb: {
                        label: 'Cadastrar',
                        parent: 'app.private.pessoa.consultar'
                    }
                })
                .state('app.private.pessoa.wizard.resumo', {
                    url: '/endereco',
                    templateUrl: 'modules/pessoa/view/cadastrar-wizard/pessoa-cadastro-wizard-resumo-view.html',
                    controller: 'PessoaCadastrarWizardResumoController',
                    resolve: {
                        loadMyFile: function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'pocJEE.pessoa',
                                files: [
                                    'modules/pessoa/controller/cadastrar-wizard/pessoa-cadastro-wizard-resumo-controller.js'        
                                ]
                            })
                        }
                    },
                    ncyBreadcrumb: {
                        label: 'Cadastrar',
                        parent: 'app.private.pessoa.consultar'
                    }
                });*/


    }]);
