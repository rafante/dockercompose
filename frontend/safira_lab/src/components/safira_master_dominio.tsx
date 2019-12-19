import React from "react";
import { useSelector } from "react-redux";
import Material from "../dominios/estoque/material/Material";
import Empresa from "../dominios/cadastros/empresa/Empresa";
import CentroCusto from "../dominios/cadastros/centroCusto/CentroCusto";
import UnidadeMedida from "../dominios/estoque/unidadeMedida/unidade_medida";
import GrupoParceiro from "../dominios/cadastros/grupo_parceiro/GrupoParceiro";
import SubGrupoParceiro from "../dominios/cadastros/subgrupo_parceiro/SubGrupoParceiro";
import ParceiroNegocio from "../dominios/cadastros/parceiro_negocios/ParceiroNegocio";
import PlanoContas from "../dominios/cadastros/plano_contas/PlanoContas";
import FormaPagamento from "../dominios/cadastros/forma_pagamento/FormaPagamento";
import PrazoPagamento from "../dominios/cadastros/prazo_pagamento/PrazoPagamento";
import TipoDocumento from "../dominios/cadastros/tipo_documento/TipoDocumento";
import Municipio from "../dominios/cadastros/municipio/Municipio";
import SubGrupoMaterial from "../dominios/estoque/subgrupo_material/SubGrupoMaterial";
import Localizacao from "../dominios/estoque/localizacao/Localizacao";
import EntradaMaterial from "../dominios/estoque/entrada_material/EntradaMaterial";
import MovimentoMaterial from "../dominios/estoque/movimento_material/MovimentoMaterial";
import Recipiente from "../dominios/estoque/recipiente/Recipiente";
import Banco from "../dominios/financeiro/banco/Banco";
import ContaCorrente from "../dominios/financeiro/conta_corrente/ContaCorrente";
import HistoricoPadrao from "../dominios/financeiro/historico_padrao/HistoricoPadrao";
import ContasPagar from "../dominios/financeiro/contas_pagar/ContasPagar";
import ContaReceber from "../dominios/financeiro/conta_receber/ContaReceber";
import MovimentoFinanceiro from "../dominios/financeiro/movimento_financeiro/MovimentoFinanceiro";
import TransferenciaContas from "../dominios/financeiro/transferencia_contas/TransferenciaContas";
import Exame from "../dominios/financeiro/exame/Exame";
import Dashboard from "./safira_dashboard";
import GrupoMaterial from "../dominios/estoque/grupo_material/GrupoMaterial";

/**
 * Responsável por renderizar o domínio de acordo com o contexto selecionado;
 * Lê o contexto selecionado da store ex.: Material, Conta a Pagar, etc; e retorna
 * o componente adequado a isso
 */
export default () => {
  const contexto = useSelector((state: any) => {
    return state.aplicacao.contextoSelecionado;
  });

  function renderizar() {
    if (!contexto) return <Dashboard />;
    //CADASTROS
    if (contexto.server === "/empresa") return <Empresa />;
    else if (contexto.server === "/centroCusto") return <CentroCusto />;
    else if (contexto.server === "/material") return <Material />;
    else if (contexto.server === "/unidadeMedida") return <UnidadeMedida />;
    else if (contexto.server === "/grupoParceiroNegocios")
      return <GrupoParceiro />;
    else if (contexto.server === "/subGrupoParceiroNegocios")
      return <SubGrupoParceiro />;
    else if (contexto.server === "/parceiroNegocios")
      return <ParceiroNegocio />;
    else if (contexto.server === "/planoContas") return <PlanoContas />;
    else if (contexto.server === "/formaPagamento") return <FormaPagamento />;
    else if (contexto.server === "/prazoPagamento") return <PrazoPagamento />;
    else if (contexto.server === "/tipoDocumento") return <TipoDocumento />;
    else if (contexto.server === "/municipio") return <Municipio />;
    //ESTOQUE------------------
    else if (contexto.server === "/grupo") return <GrupoMaterial />;
    else if (contexto.server === "/subGrupo") return <SubGrupoMaterial />;
    else if (contexto.server === "/localizacao") return <Localizacao />;
    else if (contexto.server === "/entradaMaterial") return <EntradaMaterial />;
    else if (contexto.server === "/movimentoMaterial")
      return <MovimentoMaterial />;
    else if (contexto.server === "/recipiente") return <Recipiente />;
    else if (contexto.server === "/banco") return <Banco />;
    else if (contexto.server === "/contaCorrente") return <ContaCorrente />;
    else if (contexto.server === "/historicoPadrao") return <HistoricoPadrao />;
    else if (contexto.server === "/contaPagar") return <ContasPagar />;
    else if (contexto.server === "/contaReceber") return <ContaReceber />;
    else if (contexto.server === "/movimentoFinanceiro")
      return <MovimentoFinanceiro />;
    else if (contexto.server === "/transferenciaContas")
      return <TransferenciaContas />;
    else if (contexto.server === "/exame") return <Exame />;
    else return <></>;
  }

  return <>{renderizar()}</>;
};
