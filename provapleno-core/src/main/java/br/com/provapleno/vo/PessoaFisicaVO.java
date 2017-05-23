package br.com.provapleno.vo;

import java.util.Date;

public class PessoaFisicaVO extends PessoaVO {

    private static final long serialVersionUID = 1L;

    private String nome;
    private String cpf;
    private String rg;
    private Date dataNascimento;

    public PessoaFisicaVO() {
    }

    public PessoaFisicaVO(Long id, String nome, String cpf, String rg, Date dataNascimento) {
        super(id);
        this.nome = nome;
        this.cpf = cpf;
        this.rg = rg;
        this.dataNascimento = dataNascimento;
    }
    
    public PessoaFisicaVO(Long id, String nome, String cpf, String rg){
    	super(id);
    	this.nome = nome;
    	this.cpf = cpf;
    	this.rg = rg;
    	
    }
    
    
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getRg() {
        return rg;
    }

    public void setRg(String rg) {
        this.rg = rg;
    }

	public Date getDataNascimento() {
		return dataNascimento;
	}

	public void setDataNascimento(Date dataNascimento) {
		this.dataNascimento = dataNascimento;
	}

}
