angular
  .module('frontendApp')
  .service('AlunoService', AlunoService);

/* @ngInject */
function AlunoService(Restangular) {

  var vm = this;
  //var path = 'alunoServico.php/';
  var path = 'http://aluno-servico.getsandbox.com/sis-backend/rest/aluno';
  vm.alterarAluno = alterarAluno;
  vm.cadastrarAluno = cadastrarAluno;
  vm.recuperarAlunoPorId = recuperarAlunoPorId;
  vm.recuperarTodosAlunos = recuperarTodosAlunos;

  function alterarAluno(objetoSlim) {
    Restangular.one(path + '/alterar').customPUT(converterObjetoSlim(vm.aluno));
  }

  function cadastrarAluno(objetoSlim) {
    Restangular.all(path + '/cadastro').post(objetoSlim);
  }

  function recuperarAlunoPorId(idAluno) {
    Restangular.one(path + '/aluno/' + idAluno).get()
  }

  function recuperarTodosAlunos() {
    Restangular.all(path + '/todos').getList();
  }

}
