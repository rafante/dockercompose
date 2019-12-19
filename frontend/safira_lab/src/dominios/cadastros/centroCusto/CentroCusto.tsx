import { SafiraFormProps } from "../../../components/safira_form";
import { SafiraDominioView } from "../../../components";
import React from "react";

export default () => {
  var formProps: SafiraFormProps = {
    labelDominio: "Centro de Custo",
    caminhoNoServidor: "/centroCusto",

    campos: [
      { label: "centroCusto", nome: "Centro de Custo Pai" },
      { label: "Código", nome: "codigo" },
      { label: "Descrição", nome: "descricao" }
    ]
  };

  return <SafiraDominioView formProps={formProps} />;
};
