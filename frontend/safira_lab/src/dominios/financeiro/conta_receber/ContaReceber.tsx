import React from "react";
import DominioView from "../../../components/safira_dominio_view";
import { SafiraFormProps } from "../../../components/safira_form";
import { SafiraTipoCampo } from "../../../components";

export default () => {
  const formProps: SafiraFormProps = {
    caminhoNoServidor: '/contaReceber',
    labelDominio: 'Conta a Receber',
    campos: [
      { nome: "dataEmissao", label: "Data de Emissão" },
      { nome: "dataDocumento", label: "Data do Documento" },
      { nome: "documento", label: "Documento" },
      {
        nome: "parceiroNegocios",
        label: "Parceiro De Negocios",
        tipo: SafiraTipoCampo.AUTOCOMPLETE
      }
    ],
  }

  return (
    <DominioView formProps={formProps} />
  )
};
