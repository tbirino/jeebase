angular
  .module('frontendApp')
  .service('EspecialidadeService', EspecialidadeService);

/* @ngInject */
function EspecialidadeService(Restangular) {

  var vm = this;
  var path = "/especialidades"

  vm.recuperarEstados = recuperarEstados;

  function recuperarEstados() {
    return Restangular.all(pat + '/todos').getList();
  }

}
