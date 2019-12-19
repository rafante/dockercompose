import React from "react";
import DominioView from "../../../components/safira_dominio_view";
import { SafiraFormProps } from "../../../components/safira_form";

export default () => {
  var formProps: SafiraFormProps = {
    caminhoNoServidor: "/grupo",
    labelDominio: "Grupo de Material",
    campos: [
      {
        label: "Descrição",
        nome: "descricao"
      }
    ]
  };

  return <DominioView formProps={formProps} />;
};
