package br.com.provapleno.dto;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

public class PaginacaoDTO<T extends Serializable> implements Serializable {

    private static final long serialVersionUID = 1L;

    private Integer currentPage;
    private Integer pageSize;
    private Integer totalResults;
    private String sortFields;
    private String sortDirections;
    private Map<String, Object> filtros;

    private List<T> list;

    public PaginacaoDTO() {
    }

    public PaginacaoDTO(Integer currentPage, Integer pageSize, String sortFields, String sortDirections) {
        this.currentPage = currentPage;
        this.pageSize = pageSize;
        this.sortFields = sortFields;
        this.sortDirections = sortDirections;
    }

    public PaginacaoDTO(Integer currentPage, Integer pageSize, String sortFields, String sortDirections, Map<String, Object> filtros) {
        this.currentPage = currentPage;
        this.pageSize = pageSize;
        this.sortFields = sortFields;
        this.sortDirections = sortDirections;
        this.filtros = filtros;
    }

    public PaginacaoDTO(Integer currentPage, String sortFields, String sortDirections) {
        this(currentPage, Integer.valueOf(10), sortFields, sortDirections);
    }

    public Integer getCurrentPage() {
        return currentPage;
    }

    public void setCurrentPage(Integer currentPage) {
        this.currentPage = currentPage;
    }

    public Integer getPageSize() {
        return pageSize;
    }

    public void setPageSize(Integer pageSize) {
        this.pageSize = pageSize;
    }

    public Integer getTotalResults() {
        return totalResults;
    }

    public void setTotalResults(Integer totalResults) {
        this.totalResults = totalResults;
    }

    public String getSortFields() {
        return sortFields;
    }

    public void setSortFields(String sortFields) {
        this.sortFields = sortFields;
    }

    public String getSortDirections() {
        return sortDirections;
    }

    public void setSortDirections(String sortDirections) {
        this.sortDirections = sortDirections;
    }

    public List<T> getList() {
        return list;
    }

    public void setList(List<T> list) {
        this.list = list;
    }

    public Integer getStart() {
        return (getCurrentPage() - 1) * getPageSize();
    }

    public Map<String, Object> getFiltros() {
        return filtros;
    }

    public void setFiltros(Map<String, Object> filtros) {
        this.filtros = filtros;
    }

}