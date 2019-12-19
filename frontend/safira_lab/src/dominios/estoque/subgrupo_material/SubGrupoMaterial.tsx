import React from "react";
import SafiraDominioView from "../../../components/safira_dominio_view";
import { SafiraFormProps } from "../../../components/safira_form";
import { SafiraTipoCampo } from "../../../components";

export default () => {
  const formProps: SafiraFormProps = {
    caminhoNoServidor: "/subGrupo",
    labelDominio: "Subgrupo",
    campos: [
      { label: "Descrição", nome: "descricao" },
      { nome: "grupo->descricao", label: "Grupo", tipo: SafiraTipoCampo.AUTOCOMPLETE, caminhoNoServidor: '/grupo' }
    ]
  };

  return <SafiraDominioView formProps={formProps} />;
};
