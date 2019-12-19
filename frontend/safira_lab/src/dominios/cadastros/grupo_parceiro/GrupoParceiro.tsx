import React from "react";
import DominioView from '../../../components/safira_dominio_view';
import { SafiraFormProps } from "../../../components/safira_form";

export default () => {
  var formProps: SafiraFormProps = {
    caminhoNoServidor: '/grupoParceiroNegocios',
    labelDominio: 'Grupo de Parceiro de Negócios',
    campos: [
      {
        label: 'Descrição',
        nome: 'descricao'
      }
    ]
  }

  return (
    <DominioView formProps={formProps} />
  );
};
