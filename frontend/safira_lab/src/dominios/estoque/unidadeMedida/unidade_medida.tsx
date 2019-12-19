import React from "react";
import { SafiraFormProps } from "../../../components/safira_form";
import { SafiraDominioView } from "../../../components";

export default () => {
  const formProps: SafiraFormProps = {
    caminhoNoServidor: "/unidadeMedida",
    labelDominio: "Unidade de Medida",
    campos: [
      {
        label: "Unidade",
        nome: "unidade"
      },
      {
        label: "Descrição",
        nome: "descricao"
      }
    ]
  };

  return <SafiraDominioView formProps={formProps} />;
};
