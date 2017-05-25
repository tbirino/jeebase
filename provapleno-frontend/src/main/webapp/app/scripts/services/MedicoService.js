angular
  .module('frontendApp')
  .service('MedicoService', MedicoService);

/* @ngInject */
function MedicoService(Restangular) {

  var vm = this;
  var path = '/medico';

  vm.alterarMedico = alterarMedico;
  vm.cadastrarMedico = cadastrarMedico;
  vm.excluirMedico = excluirMedico;
  vm.recuperarMedicoPor = recuperarMedicoPor;
  vm.recuperarTodos = recuperarTodos;

  function alterarMedico(objetoSlim) {
    return Restangular.one(path + '/alterar').customPUT(converterObjetoSlim(vm.aluno));
  }

  function cadastrarMedico(objetoSlim) {
    return Restangular.all(path + '/cadastro').post(objetoSlim);
  }

  function recuperarMedicoPor(idAluno) {
    return Restangular.one(path + '/medico/' + idAluno).get()
  }

  function recuperarTodos() {
    return Restangular.all(path + '/todos').getList();
  }

  function excluirMedico(id) {
    return Restangular.one(path + '/exluirMedico', id).remove();
  }

}
