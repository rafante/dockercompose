import React from "react";
import DominioView from "../../../components/safira_dominio_view";
import { SafiraFormProps } from "../../../components/safira_form";
import { SafiraTipoCampo } from "../../../components";

export default () => {
  const formProps: SafiraFormProps = {
    caminhoNoServidor: '/historicoPadrao',
    labelDominio: 'Histórico Padrão',
    campos: [
      { nome: "descricao", label: "Descrição" },
      {
        nome: "planoContas",
        label: "Plano de Contas",
        tipo: SafiraTipoCampo.AUTOCOMPLETE
      },
      {
        nome: "centroCusto",
        label: "Centro de Custo",
        tipo: SafiraTipoCampo.AUTOCOMPLETE
      },
      {
        nome: "contaCorrente",
        label: "Conta Corrente",
        tipo: SafiraTipoCampo.AUTOCOMPLETE
      }
    ],
  }

  return (
    <DominioView formProps={formProps} />
  )
};
