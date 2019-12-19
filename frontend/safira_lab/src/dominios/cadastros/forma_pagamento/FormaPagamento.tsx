import React from "react";
import DominioView from "../../../components/safira_dominio_view";
import { SafiraFormProps } from "../../../components/safira_form";
import { SafiraTipoCampo } from "../../../components";

export default () => {

  var formProps: SafiraFormProps = {
    caminhoNoServidor: '/formaPagamento',
    labelDominio: 'Forma de Pagamento',
    campos: [
      {
        nome: 'descricao',
        label: 'Descrição'
      },
      {
        nome: 'controle_cheque',
        label: 'Controle de Cheque',
        tipo: SafiraTipoCampo.UNITARIO
      }
    ]
  }

  return <DominioView formProps={formProps} />;
};
