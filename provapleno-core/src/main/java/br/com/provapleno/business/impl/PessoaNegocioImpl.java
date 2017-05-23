package br.com.provapleno.business.impl;

import br.com.provapleno.business.BackendNegocioBase;
import br.com.provapleno.business.PessoaNegocio;
import br.com.provapleno.model.Pessoa;
import br.com.provapleno.persistence.impl.PersistenciaBackend;
import br.com.provapleno.vo.PessoaVO;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

@Stateless
public class PessoaNegocioImpl implements PessoaNegocio {

}
