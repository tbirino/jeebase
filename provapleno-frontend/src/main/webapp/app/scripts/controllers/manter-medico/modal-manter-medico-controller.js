angular
  .module('frontendApp')
  .controller('ModalManterMedicoController', ModalManterMedicoController);

/* @ngInject */
function ModalManterMedicoController($uibModalInstance, estados, especialidades, idMedico, toastr, MedicoService) {

  var vm = this;
  vm.estadosCidades = estados;
  vm.especialidades = especialidades;
  vm.salvar = salvar;
  vm.cancelar = cancelar;

  vm.medico = {
    id: null,
    primeiroNome: null,
    ultimoNome: null,
    especialidade: null,
    email: null,
    estado: null,
    cidade: null,
    ativo: null,
    status: null,
  };

  function alterarAluno(objetoSlim) {
    MedicoService.alterarMedico(objetoSlim).then(function (resultado) {
      toastr.success('Aluno alterado com sucesso');
      $uibModalInstance.close();
      return;
    });
  }

  function salvar() {
    //var objetoSlim = converterObjetoSlim(vm.aluno);
    // if (vm.aluno.idMedico) {
    //   alterarMedico(objetoSlim);
    // }
    cadastrarMedico();
  }

  function cadastrarMedico() {
    debugger;
    MedicoService.cadastrarMedico(vm.medico).then(function (resultado) {
      toastr.success('Aluno cadastrado com sucesso');
      $uibModalInstance.close();
      return;
    });
  }

  function cancelar() {
    $uibModalInstance.dismiss();
  }

  function converterObjetoSlim(aluno) {
    return {
      'id_aluno': aluno.idMedico,
      'nome': aluno.nome,
      'cpf': aluno.cpf,
      'rg': aluno.rg,
      'dt_nascimento': aluno.dtNascimento,
      'tel_celular': aluno.telCelular,
      'endereco': aluno.endereco,
      'tel_residencial': aluno.telResidencial,
      'nome_pai': aluno.nomePai,
      'nome_mae': aluno.nomeMae,
      'email': aluno.email,
      'dt_entrada': aluno.dtEntrada,
    };
  }

  function recuperarAlunoSeExistirIdAluno() {
    if (idMedico) {
      MedicoService.recuperarAlunoPorId.then(function (resultado) {
        vm.aluno = resultado.plain()[0];
      });
    }
  }

  function init() {
    recuperarAlunoSeExistirIdAluno();
  }

  init();

}
