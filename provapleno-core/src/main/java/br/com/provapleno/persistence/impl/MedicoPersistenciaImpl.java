package br.com.provapleno.persistence.impl;

import java.util.List;

import javax.ejb.Stateless;

import br.com.provapleno.model.Medico;
import br.com.provapleno.persistence.MedicoPersistencia;

@Stateless
public class MedicoPersistenciaImpl extends PersistenciaBackend implements MedicoPersistencia {

	@Override
	public List<Medico> obterTodos() {
		return getEntityManager().createQuery("SELECT m FROM Medico m", Medico.class).getResultList();
	}

	@Override
	public Medico obterPorId(Integer id) {
		return getEntityManager().createQuery("SELECT m FROM Medico m WHERE m.id = id", Medico.class)
				.setParameter(":id", id).getSingleResult();
	}

}
