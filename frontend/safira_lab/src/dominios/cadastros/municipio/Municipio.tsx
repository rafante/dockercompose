import React from "react";
import DominioView from "../../../components/safira_dominio_view";
import { SafiraFormProps } from "../../../components/safira_form";

export default () => {

  const formProps: SafiraFormProps = {
    caminhoNoServidor: '/municipio',
    labelDominio: 'Município',
    campos: [
      {
        label: 'Nome',
        nome: 'nome',
      },
      {
        label: 'Estado',
        nome: 'estado_id',
      }
    ]
  }

  return (
    <DominioView formProps={formProps} />
  )
};
