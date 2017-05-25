package br.com.provapleno.servico;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import br.com.provapleno.business.MedicoNegocio;

@Stateless
@Path("/medico")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class MedicoServico {
	@EJB
	private MedicoNegocio medicoNegocio;

	@GET
	@Path("{id}")
	public Response consultarPorId(@PathParam("id") Integer id) {
		return Response.ok(medicoNegocio.consultarPorId(id)).build();
	}

	@GET
	@Path("/todos")
	public Response consultar() {
		return Response.ok(medicoNegocio.consultar()).build();
	}

}
