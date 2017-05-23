package br.com.provapleno.business;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;


public class BackendNegocioBase {

    @PersistenceContext
    private EntityManager entityManager;

    protected EntityManager getEntityManager() {
        return entityManager;
    }

}
