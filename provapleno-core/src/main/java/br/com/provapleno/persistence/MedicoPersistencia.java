package br.com.provapleno.persistence;

import java.util.List;

import javax.ejb.Local;

import br.com.provapleno.model.Medico;

@Local
public interface MedicoPersistencia {
	List<Medico> obterTodos();
	Medico obterPorId(Integer id);
}
