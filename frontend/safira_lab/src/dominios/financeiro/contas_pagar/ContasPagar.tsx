import React from "react";
import DominioView from "../../../components/safira_dominio_view";
import { SafiraFormProps } from "../../../components/safira_form";
import { SafiraTipoCampo } from "../../../components";

export default () => {
  const formProps: SafiraFormProps = {
    caminhoNoServidor: "/localizacao",
    labelDominio: "Localização",
    campos: [
      { nome: "dataEmissao", label: "Data de Emissão", tipo: SafiraTipoCampo.DATA },
      {
        nome: "dataDocumento",
        label: "Data do Documento",
        tipo: SafiraTipoCampo.DATA
      },
      { nome: "documento", label: "Documento" },
      {
        nome: "tipoDocumento",
        label: "Tipo Documento",
        tipo: SafiraTipoCampo.SELECT
      },
      { nome: "referencia", label: "Referência" },
      {
        nome: "planoContas",
        label: "Plano de contas",
        tipo: SafiraTipoCampo.AUTOCOMPLETE
      },
      { nome: "descricao", label: "Descrição" },
      {
        nome: "parceiroNegocios",
        label: "Fronecedor",
        tipo: SafiraTipoCampo.AUTOCOMPLETE
      },
      { nome: "centroCusto", label: "Centro de custo" },
      { nome: "valorTotal", label: "Valor Total" },
      {
        nome: "valorParcelas",
        label: "Valor total(Parcelas)",
        tipo: SafiraTipoCampo.NUMERICO,
        camposTotalizados: []
      },
      {
        nome: "boletoRecebido",
        label: "Boleto recebido",
        tipo: SafiraTipoCampo.UNITARIO
      }
    ]
  };

  return <DominioView formProps={formProps} />;
};
