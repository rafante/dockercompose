import React from "react";
import DominioView from "../../../components/safira_dominio_view";
import { SafiraFormProps } from "../../../components/safira_form";
import { SafiraTipoCampo } from "../../../components";

export default () => {
  const formProps: SafiraFormProps = {
    caminhoNoServidor: "/planoContas",
    labelDominio: "Plano de Contas",
    campos: [
      {
        nome: "planoContas",
        label: "Plano de contas",
        tipo: SafiraTipoCampo.SELECT,
        valoresSelect: [{ label: "Plano", valor: "/planoContas" }]
      },
      { nome: "codigo", label: "Código" },
      { nome: "descricao", label: "Descrição" },
      {
        nome: "natureza",
        label: "Natureza",
        tipo: SafiraTipoCampo.SELECT,
        valoresSelect: [
          { valor: "DESPESA", label: "Despesa" },
          { valor: "RECEITA", label: "Receita" }
        ]
      }
    ]
  };

  return <DominioView formProps={formProps} />;
};


