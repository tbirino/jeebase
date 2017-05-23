package br.com.provapleno.vo;

import java.util.Objects;

public class ReceitaFederalVO   {
  
  private String nome;
  private String dataInscricao;
  private String dataNascimento;
  private String codigoSituacaoCadastral;
  private String cpf;

  
  /**
   **/
  public String getNome() {
    return nome;
  }
  public void setNome(String nome) {
    this.nome = nome;
  }

  
  /**
   **/
  public String getDataInscricao() {
    return dataInscricao;
  }
  public void setDataInscricao(String dataInscricao) {
    this.dataInscricao = dataInscricao;
  }

  
  /**
   **/
  public String getDataNascimento() {
    return dataNascimento;
  }
  public void setDataNascimento(String dataNascimento) {
    this.dataNascimento = dataNascimento;
  }

  
  /**
   **/
  public String getCodigoSituacaoCadastral() {
    return codigoSituacaoCadastral;
  }
  public void setCodigoSituacaoCadastral(String codigoSituacaoCadastral) {
    this.codigoSituacaoCadastral = codigoSituacaoCadastral;
  }

  
  /**
   **/
  public String getCpf() {
    return cpf;
  }
  public void setCpf(String cpf) {
    this.cpf = cpf;
  }

  

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ReceitaFederalVO receitaFederalVO = (ReceitaFederalVO) o;
    return Objects.equals(nome, receitaFederalVO.nome) &&
        Objects.equals(dataInscricao, receitaFederalVO.dataInscricao) &&
        Objects.equals(dataNascimento, receitaFederalVO.dataNascimento) &&
        Objects.equals(codigoSituacaoCadastral, receitaFederalVO.codigoSituacaoCadastral) &&
        Objects.equals(cpf, receitaFederalVO.cpf);
  }

  @Override
  public int hashCode() {
    return Objects.hash(nome, dataInscricao, dataNascimento, codigoSituacaoCadastral, cpf);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ReceitaFederalVO {\n");
    
    sb.append("    nome: ").append(toIndentedString(nome)).append("\n");
    sb.append("    dataInscricao: ").append(toIndentedString(dataInscricao)).append("\n");
    sb.append("    dataNascimento: ").append(toIndentedString(dataNascimento)).append("\n");
    sb.append("    codigoSituacaoCadastral: ").append(toIndentedString(codigoSituacaoCadastral)).append("\n");
    sb.append("    cpf: ").append(toIndentedString(cpf)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
}

