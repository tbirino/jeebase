angular
  .module('frontendApp')
  .controller('ModalManterAlunosController', ModalManterAlunosController);

/* @ngInject */
function ModalManterAlunosController($uibModalInstance, idAluno, toastr, Restangular, AlunoService) {

  var vm = this;
  vm.cadastrar = cadastrar;
  vm.fechar = fechar;

  vm.aluno = {
    idAluno: null,
    nome: null,
    cpf: null,
    rg: null,
    dtNascimento: null,
    endereco: null,
    telResidencial: null,
    telCelular: null,
    nomePai: null,
    nomeMae: null,
    email: null,
    dtEntrada: null,
    alunoTipoSanguineo: null
  };

  function alterarAluno(objetoSlim) {
    AlunoService.alterarAluno(objetoSlim).then(function (resultado) {
      toastr.success('Aluno alterado com sucesso');
      $uibModalInstance.close();
      return;
    });
  }

  function cadastrar() {
    var objetoSlim = converterObjetoSlim(vm.aluno);
    if (vm.aluno.idAluno) {
      alterarAluno(objetoSlim);
    }
    cadastrarAluno(objetoSlim);
  }

  function cadastrarAluno(objetoSlim) {
    AlunoService.cadastrarAluno(objetoSlim).then(function (resultado) {
      toastr.success('Aluno cadastrado com sucesso');
      $uibModalInstance.close();
      return;
    });
  }

  function fechar() {
    $uibModalInstance.dismiss();
  }

  function converterObjetoSlim(aluno) {
    return {
      'id_aluno': aluno.idAluno,
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
    if (idAluno) {
      AlunoService.recuperarAlunoPorId.then(function (resultado) {
        vm.aluno = resultado.plain()[0];
      });
    }
  }

  function init() {
    recuperarAlunoSeExistirIdAluno();
  }

  init();

}
