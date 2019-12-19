import React from "react";
import DominioView from "../../../components/safira_dominio_view";
import { SafiraFormProps } from "../../../components/safira_form";

export default () => {
  const formProps: SafiraFormProps = {
    caminhoNoServidor: "/banco",
    labelDominio: "Banco",
    campos: [
      { nome: "descricao", label: "Descrição" },
      { nome: "codigo", label: "Código" }
    ]
  };

  return <DominioView formProps={formProps} />;
};
