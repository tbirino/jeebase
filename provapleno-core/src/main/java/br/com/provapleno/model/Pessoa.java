package br.com.provapleno.model;

import javax.persistence.*;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@Table(name = "PESSOA")
public class Pessoa {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_pessoa_id")
    @SequenceGenerator(name = "seq_pessoa_id", sequenceName = "seq_pessoa_id", initialValue = 100)
    @Column(nullable = false)
    private Long id;

    public Pessoa() {
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
