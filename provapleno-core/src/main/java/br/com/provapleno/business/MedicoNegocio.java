package br.com.provapleno.business;

import java.util.List;

import javax.ejb.Local;

import br.com.provapleno.model.Medico;

@Local
public interface MedicoNegocio {
	List<Medico> consultar();

	Medico consultarPorId(Integer id);
}
