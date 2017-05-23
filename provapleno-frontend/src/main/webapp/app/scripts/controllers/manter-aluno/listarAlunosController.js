angular
  .module('frontendApp')
  .controller('ListarAlunosController', ListarAlunosController);

/* @ngInject */
function ListarAlunosController($uibModal, toastr, Restangular, NgTableParams, AlunoService) {

  var vm = this;
  //var path = 'alunoServico.php/';
  var path = '/aluno';
  vm.abrirModalCadastroAluno = abrirModalCadastroAluno;
  vm.abrirModalAlterarAluno = abrirModalAlterarAluno;
  vm.abrirModalExibirAluno = abrirModalExibirAluno;
  vm.excluirAluno = excluirAluno;

  function init() {
    Restangular.all(path + '/todos').getList().then(function (resultado) {
      vm.alunos = resultado.plain();
      initTabelaAlunos(vm.alunos);
    });

  }

  function initTabelaAlunos(alunos) {
    vm.tblAlunos = new NgTableParams({
      page: 1,
      count: 10,
    }, {
      total: 0,
      counts: [5, 10, 15, 20, 50, 100],
      dataset: alunos
    });
  }

  function excluirAluno(idAluno) {
    Restangular.one(path + '/excluirAluno', idAluno).remove().then(function (resultado) {
      toastr.success('O aluno foi excluido do banco de dados!');
      init();
    });

  }

  function abrirModalCadastroAluno() {
    var modalInstance = $uibModal.open({
      templateUrl: 'views/manter-aluno/modalCadastrarAlunos.html',
      controller: 'ModalManterAlunosController',
      controllerAs: 'vm',
      size: 'lg',
      resolve: {
        'idAluno': function () {
          return null;
        }
      }
    });
    modalInstance.result.then(function () {
      init();
    });
  }

  function abrirModalAlterarAluno(id) {
    var modalInstance = $uibModal.open({
      templateUrl: 'views/manter-aluno/modalCadastrarAlunos.html',
      controller: 'ModalManterAlunosController',
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

  function abrirModalExibirAluno(id) {
    var modalInstance = $uibModal.open({
      templateUrl: 'frontend/manter-aluno/view/modal-exibir-alunos.html',
      controller: 'ModalExibirAlunosController',
      controllerAs: 'modalExibirAlunosCtrl',
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
