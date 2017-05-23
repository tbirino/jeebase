package br.com.provapleno.vo;


import java.io.Serializable;

public class PessoaVO implements Serializable {

    private static final long serialVersionUID = 1;

    private Long id;

    public PessoaVO() {
    }

    public PessoaVO(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

}
