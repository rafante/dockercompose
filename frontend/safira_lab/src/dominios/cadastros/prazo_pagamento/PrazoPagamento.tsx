import React from "react";
import DominioView from "../../../components/safira_dominio_view";
import { SafiraFormProps } from "../../../components/safira_form";

export default () => {
  const formProps: SafiraFormProps = {
    caminhoNoServidor: '/prazoPagamento',
    labelDominio: 'Prazo de Pagamento',
    campos: [
      {
        label: 'Descrição',
        nome: 'descricao'
      }
    ],
  }

  return (
    <DominioView formProps={formProps} />
  )
};
