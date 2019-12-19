import React from "react";
import DominioView from "../../../components/safira_dominio_view";
import { SafiraFormProps } from "../../../components/safira_form";
import { SafiraTipoCampo } from "../../../components";

export default () => {
  const formProps: SafiraFormProps = {
    caminhoNoServidor: "/movimentoMaterial",
    labelDominio: "Movimento de Material",
    campos: [
      { nome: "status", label: "Status", tipo: SafiraTipoCampo.STEP },
      {
        nome: "data_movimento",
        label: "Data da Movimentação",
        tipo: SafiraTipoCampo.DATA
      },
      { nome: "total", label: "Total" },
      {
        nome: "centroCusto",
        label: "Centro de Custo",
        tipo: SafiraTipoCampo.AUTOCOMPLETE
      },
      { nome: "motivo", label: "Motivo" },
      {
        nome: "entrada_saida",
        label: "Tipo de Movimento",
        tipo: SafiraTipoCampo.SELECT
      }
    ]
  };

  return <DominioView formProps={formProps} />;
};
