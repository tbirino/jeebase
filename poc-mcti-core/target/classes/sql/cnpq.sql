SELECT /*+ index(GRPESQ.IDX_HS_GRUPO_NRO_GRP_DTA_INC)*/
GRUPO.NRO_ID_GRUPO_PESQ || '||' || rg.cod_rh || '||' ||
rlp.nro_id_linha_pesquisa_grupo AS ID,
grupo.nro_id_grupo_pesq,
rg.cod_rh,
rlp.nro_id_linha_pesquisa_grupo,
(select DBMS_LOB.SUBSTR(WM_CONCAT(hrg.cod_rh || '##' || erh.nme_rh || '##' ||
hrg.nro_tipo_lideranca_grupo_pesq))
from GRPESQ.hs_re_grupo_rh       hrg,
GRPESQ.hs_en_grupo_pesquisa hgp,
FOMENTO.en_recurso_humano   erh
where hrg.nro_id_grupo_pesq = grupo.nro_id_grupo_pesq
and erh.cod_rh = hrg.cod_rh
and hrg.nro_id_grupo_pesq = hgp.nro_id_grupo_pesq
and hgp.dta_inclusao_hs = hrg.dta_inclusao_hs
and hrg.nro_id_tipo_situacao_rh_grupo = '1'
and hrg.nro_tipo_lideranca_grupo_pesq in ('1', '2')
and hgp.NRO_ID_HS_GRUPO_PESQUISA = grupo.NRO_ID_HS_GRUPO_PESQUISA) lideres_grupo,
rlp.txt_objetivo_linha_pesquisa,
linha.txt_titulo_linha_pesquisa,
(SELECT DBMS_LOB.SUBSTR(WM_CONCAT('GA' || AC.COD_GRANDE_AREA || 'AA' ||
AC.COD_AREA))
FROM GRPESQ.hs_RE_LINHA_PESQ_GRUPO       SRLP,
GRPESQ.hs_RE_AREA_CONHEC_LINHA_PESQ RAC,
FOMENTO.EN_AREA_CONHEC              AC
WHERE SRLP.NRO_ID_GRUPO_PESQ = grupo.nro_id_grupo_pesq
AND RAC.NRO_ID_LINHA_PESQUISA_GRUPO = SRLP.NRO_ID_LINHA_PESQUISA_GRUPO
AND AC.COD_AREA_CONHEC = RAC.COD_AREA_CONHEC
and rac.dta_inclusao_hs = grupo.dta_inclusao_hs
and grupo.dta_inclusao_hs = SRLP.dta_inclusao_hs) AREA_LINHA,
(SELECT DBMS_LOB.SUBSTR(WM_CONCAT('SE' || SETOR_PAI.COD_SETOR_PAI || 'SP' ||
SETOR_PAI.COD_SETOR_ATIVIDADE))
FROM FOMENTO.EN_SETOR_ATIVIDADE          SETOR,
FOMENTO.EN_SETOR_ATIVIDADE          SETOR_PAI,
GRPESQ.hs_re_setor_aplic_linha_pesq LINHA_SETOR
WHERE SETOR.COD_SETOR_ATIVIDADE = LINHA_SETOR.COD_SETOR_ATIVIDADE
AND SETOR.COD_SETOR_PAI = SETOR_PAI.COD_SETOR_ATIVIDADE
AND LINHA_SETOR.NRO_ID_LINHA_PESQUISA_GRUPO =
LINHA.NRO_ID_LINHA_PESQUISA_GRUPO
AND linha_setor.dta_inclusao_hs = grupo.dta_inclusao_hs) SETOR_LINHA,
(select DBMS_LOB.SUBSTR(WM_CONCAT(epc.txt_palavra_chave))
from GRPESQ.hs_RE_PLV_CHAVE_LINHA_PESQ hpc,
GRPESQ.en_palavra_chave_pesq      epc
where hpc.nro_id_linha_pesquisa_grupo = LINHA.NRO_ID_LINHA_PESQUISA_GRUPO
and epc.nro_id_palavra_chave = hpc.nro_id_palavra_chave
and hpc.dta_inclusao_hs = grupo.dta_inclusao_hs) AS PALAVRA_CHAVE_LINHA,
(select cod_nivel_form
from (SELECT enf.cod_nivel_form, EFM.COD_RH
FROM FOMENTO.EN_FORMACAO EFM, FOMENTO.EN_NIVEL_FORM ENF
WHERE EFM.ANO_TER_FORM IS NOT NULL
AND EFM.COD_NIVEL_FORM = ENF.COD_NIVEL_FORM
ORDER BY ENF.SEQ_ORDEM_NIVEL_FORM DESC) tbx,
GRPESQ.RE_rh_GRUPO rhin
where rownum = 1
and tbx.COD_RH = rhin.cod_rh
and rhin.cod_rh = rg.cod_rh) as cod_nivel_form_rh,
(select DSC_NIVEL_FORM
from (SELECT ENF.DSC_NIVEL_FORM, EFM.COD_RH
FROM FOMENTO.EN_FORMACAO EFM, FOMENTO.EN_NIVEL_FORM ENF
WHERE EFM.ANO_TER_FORM IS NOT NULL
AND EFM.COD_NIVEL_FORM = ENF.COD_NIVEL_FORM
ORDER BY ENF.SEQ_ORDEM_NIVEL_FORM DESC) tbx,
GRPESQ.RE_rh_GRUPO rhin
where rownum = 1
and tbx.COD_RH = rhin.cod_rh
and rhin.cod_rh = rg.cod_rh) as DSC_NIVEL_FORM_RH,
rh.nme_rh,
rg.cod_rh_pesq_orientador as cod_rh_orientador,
(select erh.nme_rh
from fomento.en_recurso_humano erh
where erh.cod_rh = rg.cod_rh_pesq_orientador) nme_orientador,
rg.nro_tipo_lideranca_grupo_pesq,
rg.nro_tipo_participacao_rh_grupo,
GRUPO.NME_GRUPO,
GRUPO.TXT_REPERCUSSAO,
GRUPO.DTA_ATUALIZACA_GRUPO_PESQ,
GRUPO.DTA_INCLUSAO_HS,
GRUPO.COD_SITUACAO_GRUPO_PESQ,
GRUPO.ANO_FORMACAO,
INST.NRO_ID_INSTITUICAO,
INST.NME_INST,
INST.SGL_INST,
ufinst.sgl_uf,
ufinst.sgl_regiao,
AREA.COD_AREA_CONHEC AS COD_AREA_CONHEC_GRUPO,
AREA.NME_AREA_CONHEC AS NME_AREA_CONHEC_GRUPO,
GRANDE_AREA.COD_AREA_CONHEC AS COD_GRANDE_AREA_CONHEC_GRUPO,
GRANDE_AREA.NME_AREA_CONHEC AS NME_GRANDE_AREA_CONHEC_GRUPO,
(SELECT DBMS_LOB.SUBSTR(WM_CONCAT(DISTINCT(TAB_1.COD_CATEG_NIVEL))) AS IDS_PROD_PESQ_BOD
FROM FOMENTO.EN_RECURSO_BOLSA BO,
(SELECT TM.COD_CATEG_NIVEL,
RH.NME_RH,
IB.COD_RH_BOLSISTA,
IB.COD_RH_ORIENTADOR,
GRU.NRO_ID_GRUPO_PESQ
FROM FOMENTO.EN_INDICACAO_BOLSA IB
JOIN FOMENTO.EN_TIPO_MODALIDADE_BOLSA TM
ON IB.COD_MODAL_BOLSA = TM.COD_MODAL_BOLSA
JOIN FOMENTO.EN_RECURSO_HUMANO RH
ON IB.COD_RH_BOLSISTA = RH.COD_RH
JOIN GRPESQ.RE_RH_GRUPO GR
ON GR.COD_RH = RH.COD_RH
AND GR.NRO_ID_TIPO_SITUACAO_RH_GRUPO = 1
JOIN GRPESQ.EN_GRUPO_PESQUISA GRU
ON GRU.NRO_ID_GRUPO_PESQ = GR.NRO_ID_GRUPO_PESQ
WHERE TM.COD_MODAL_BOLSA_PARENT = '0600') TAB_1
WHERE TAB_1.COD_RH_BOLSISTA = BO.COD_RH
and TAB_1.NRO_ID_GRUPO_PESQ = grupo.nro_id_grupo_pesq) AS PRODUCAO_PESQ,
(SELECT DBMS_LOB.SUBSTR(WM_CONCAT(DISTINCT TAB_2.COD_CONCEITO_CURSO)) AS IDS_DOCENTES_CAPES
FROM GRPESQ.EN_GRUPO_PESQUISA GRU,
(SELECT DC.NRO_ID_CAPES,
DC.NME_DOCENTE_CAPES,
DC.NRO_ID_CNPQ_ETT,
RH.NME_RH,
RH.COD_RH,
CC.COD_PROGRAMA,
CC.NME_PROGRAMA,
CC.COD_CONCEITO_CURSO,
DC.ANO_BASE,
DC.NRO_DOCUMENTO,
GR.NRO_ID_GRUPO_PESQ
FROM DOMINIO.EN_DOCENTES_CAPES DC
JOIN FOMENTO.EN_CURSO_CAPES CC
ON DC.IDPROGRAMA = CC.COD_PROGRAMA
JOIN FOMENTO.EN_RECURSO_HUMANO RH
ON DC.NRO_ID_CNPQ_ETT = RH.NRO_ID_CNPQ
JOIN GRPESQ.RE_RH_GRUPO GR
ON RH.COD_RH = GR.COD_RH
AND GR.NRO_ID_TIPO_SITUACAO_RH_GRUPO = 1) TAB_2
WHERE TAB_2.NRO_ID_GRUPO_PESQ = GRU.NRO_ID_GRUPO_PESQ
AND GRU.NRO_ID_GRUPO_PESQ = grupo.nro_id_grupo_pesq) AS DOCENTES_CAPES,
(select DBMS_LOB.SUBSTR(WM_CONCAT(heg.nro_id_grupo_pesq || '##' ||
heg.nme_grupo || '##' ||
hrg.nro_tipo_participacao_rh_grupo || '##' ||
eid.sgl_inst || '@@'))
from grpesq.hs_re_grupo_rh       hrg,
grpesq.hs_en_grupo_pesquisa heg,
dirinst.en_instituicao_di   eid
where hrg.cod_rh = rg.cod_rh
and heg.nro_id_instituicao_vinculo = eid.nro_id_instituicao
and hrg.nro_id_grupo_pesq = heg.nro_id_grupo_pesq
and hrg.nro_id_tipo_situacao_rh_grupo = 1
and heg.cod_situacao_grupo_pesq in ('CE', 'NA')
and hrg.dta_inclusao_hs = heg.dta_inclusao_hs
and heg.dta_inclusao_hs =
(select max(hg.dta_inclusao_hs)
from grpesq.hs_en_grupo_pesquisa hg
where hg.nro_id_grupo_pesq = heg.nro_id_grupo_pesq)) grupos_participa,
(select WM_CONCAT(i.nme_inst || '##')
from grpesq.hs_re_inst_parceira_grupo r, dirinst.en_instituicao_di i
where r.nro_id_grupo_pesq = GRUPO.NRO_ID_GRUPO_PESQ
and i.nro_id_instituicao = r.nro_id_instituicao
and r.dta_inclusao_hs = GRUPO.DTA_INCLUSAO_HS) inst_parceira_grupo
FROM GRPESQ.HS_EN_GRUPO_PESQUISA GRUPO
INNER JOIN GRPESQ.HS_EN_GRUPO_PESQUISA GRP
ON grupo.NRO_ID_HS_GRUPO_PESQUISA = GRP.NRO_ID_HS_GRUPO_PESQUISA
RIGHT JOIN GRPESQ.hs_re_grupo_rh RG
ON GRP.nro_id_grupo_pesq = rg.nro_id_grupo_pesq
AND RG.dta_inclusao_hs = grupo.dta_inclusao_hs
AND rg.nro_id_tipo_situacao_rh_grupo = 1
RIGHT JOIN GRPESQ.hs_RE_LINHA_PESQ_GRUPO RLP
ON rlp.nro_id_grupo_pesq = rg.nro_id_grupo_pesq
AND rlp.dta_inclusao_hs = grupo.dta_inclusao_hs
LEFT JOIN GRPESQ.en_linha_pesquisa_grupo LINHA
ON linha.nro_id_linha_pesquisa_grupo = rlp.nro_id_linha_pesquisa_grupo
LEFT JOIN FOMENTO.en_recurso_humano rh
ON rg.cod_rh = rh.cod_rh
LEFT JOIN DIRINST.EN_INSTITUICAO_DI INST
ON INST.NRO_ID_INSTITUICAO = GRP.NRO_ID_INSTITUICAO_VINCULO
LEFT JOIN DIRINST.en_endereco_inst_di ENDINST
ON endinst.nro_id_instituicao = INST.NRO_ID_INSTITUICAO
LEFT JOIN fomento.EN_UF UFINST
ON ufinst.sgl_uf = endinst.sgl_uf_end_inst
LEFT JOIN FOMENTO.EN_AREA_CONHEC AREA
ON GRUPO.COD_AREA_CONHEC_PREDOMINANTE = AREA.COD_AREA_CONHEC
LEFT JOIN FOMENTO.EN_AREA_CONHEC GRANDE_AREA
ON AREA.COD_GRANDE_AREA = GRANDE_AREA.COD_AREA_CONHEC
WHERE GRUPO.COD_SITUACAO_GRUPO_PESQ in ('CE', 'NA')
and grupo.dta_inclusao_hs =
(select max(gp.dta_inclusao_hs)
from GRPESQ.HS_EN_GRUPO_PESQUISA gp
where gp.NRO_ID_GRUPO_PESQ = GRUPO.NRO_ID_GRUPO_PESQ
and gp.cod_situacao_grupo_pesq in ('CE', 'NA'))
and not exists
(select *
from GRPESQ.HS_EN_GRUPO_PESQUISA gp
where gp.nro_id_grupo_pesq = grupo.nro_id_grupo_pesq
and gp.cod_situacao_grupo_pesq in ('EX', 'CN')
and gp.dta_inclusao_hs > grupo.dta_inclusao_hs)