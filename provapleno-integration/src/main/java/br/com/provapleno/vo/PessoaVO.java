package br.com.provapleno.vo;

public class PessoaVO{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private String nome;
	private String dataInscricao;
	private String dataNascimento;
	private String codigoSituacaoCadastral;
	private String cpf;
	
	public String getCpf() {
		return cpf;
	}
	public void setCpf(String cpf) {
		this.cpf = cpf;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getDataInscricao() {
		return dataInscricao;
	}
	public void setDataInscricao(String dataInscricao) {
		this.dataInscricao = dataInscricao;
	}
	public String getDataNascimento() {
		return dataNascimento;
	}
	public void setDataNascimento(String dataNascimento) {
		this.dataNascimento = dataNascimento;
	}
	public String getCodigoSituacaoCadastral() {
		return codigoSituacaoCadastral;
	}
	public void setCodigoSituacaoCadastral(String codigoSituacaoCadastral) {
		this.codigoSituacaoCadastral = codigoSituacaoCadastral;
	}
	
	

}
