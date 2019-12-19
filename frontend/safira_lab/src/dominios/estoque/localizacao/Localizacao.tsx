import React from "react";
import DominioView from "../../../components/safira_dominio_view";
import { SafiraFormProps } from "../../../components/safira_form";

export default () => {
  const formProps: SafiraFormProps = {
    caminhoNoServidor: '/localizacao',
    labelDominio: 'Localização',
    campos: [
      { nome: 'descricao', label: 'Descrição' }
    ],
  }

  return (
    <DominioView formProps={formProps} />
  )
};
