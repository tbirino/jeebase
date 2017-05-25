angular
  .module('frontendApp')
  .controller('ListarMedicosController', ListarMedicosController);

/* @ngInject */
function ListarMedicosController($uibModal, toastr, NgTableParams, MedicoService) {

  var vm = this;
  var path = '/medico';
  vm.abrirModalCadastrarMedico = abrirModalCadastrarMedico;
  vm.abrirModalAlterarMedico = abrirModalAlterarMedico;
  vm.abrirModalExibirMedico = abrirModalExibirMedico;
  vm.exluirMedico = exluirMedico;

  function init() {
    MedicoService.recuperarTodos().then(function (resultado) {
      vm.medicos = resultado.plain();
      initTabelaMedicos(vm.medicos);
    });
  }

  function initTabelaMedicos(medicos) {
    vm.tblMedicos = new NgTableParams({
      page: 1,
      count: 10,
    }, {
      total: 0,
      counts: [5, 10, 15, 20, 50, 100],
      dataset: medicos
    });
  }

  function exluirMedico(id) {
    MedicoService.excluirMedico(id).then(function (resultado) {
      toastr.success('O medico foi excluido do banco de dados!');
      init();
    });
  }

  function abrirModalCadastrarMedico() {
    var modalInstance = $uibModal.open({
      templateUrl: 'views/manter-medico/modal-manter-medico.html',
      controller: 'ModalManterMedicoController',
      controllerAs: 'vm',
      size: 'lg',
      resolve: {
        "idMedico": function () {
          return null;
        },
        "estados":function (EstadosService) {
          return null;
          //return EstadosService.recuperarEstados();
        },
        "especialidades":function(EspecialidadeService) {
          return null;
        }
      }
    });
    modalInstance.result.then(function () {
      init();
    });
  }

  function abrirModalAlterarMedico(id) {
    var modalInstance = $uibModal.open({
      templateUrl: 'views/manter-medico/modal-manter-medico.html',
      controller: 'ModalManterMedicoController',
      controllerAs: 'vm',
      size: 'lg',
      resolve: {
        'id': function () {
          return id;
        }
      }
    });
    modalInstance.result.then(function () {
      init();
    });
  }

  function abrirModalExibirMedico(id) {
    var modalInstance = $uibModal.open({
      templateUrl: 'frontend/manter-medico/view/modal-exibir-medicos.html',
      controller: 'ModalExibirMedicoController',
      controllerAs: 'vm',
      size: 'lg',
      resolve: {
        'id': function () {
          return id;
        }
      }
    });
    modalInstance.result.then(function () {
      init();
    });
  }

  init();


}
