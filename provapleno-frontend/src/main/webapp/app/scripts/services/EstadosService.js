angular
  .module('frontendApp')
  .service('EstadosService', EstadosService);

/* @ngInject */
function EstadosService(Restangular) {

  var vm = this;
  var backend = Restangular.all("estados");

  vm.recuperarEstados = recuperarEstados;

  function recuperarEstados() {
    return Restangular.all('/todos').getList();
  }

}
