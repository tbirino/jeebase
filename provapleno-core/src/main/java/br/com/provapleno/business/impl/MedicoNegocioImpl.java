package br.com.provapleno.business.impl;

import java.util.List;

import javax.ejb.EJB;
import javax.ejb.Stateless;

import br.com.provapleno.business.MedicoNegocio;
import br.com.provapleno.model.Medico;
import br.com.provapleno.persistence.MedicoPersistencia;

@Stateless
public class MedicoNegocioImpl implements MedicoNegocio {
	@EJB
	MedicoPersistencia persistencia;

	@Override
	public List<Medico> consultar() {
		return persistencia.obterTodos();
	}

	@Override
	public Medico consultarPorId(Integer id) {
		return persistencia.obterPorId(id);
	}

}
