import React from "react";
import DominioView from "../../../components/safira_dominio_view";
import { SafiraFormProps } from "../../../components/safira_form";
import { SafiraTipoCampo } from "../../../components";

export default () => {
  const formProps: SafiraFormProps = {
    caminhoNoServidor: "/contaCorrente",
    labelDominio: "Conta Corrente",
    campos: [
      { nome: "descricao", label: "Descrição" },
      { nome: "banco", label: "Banco", tipo: SafiraTipoCampo.AUTOCOMPLETE },
      { nome: "agencia", label: "Agência" },
      { nome: "conta", label: "Conta" },
      {
        nome: "tipoConta",
        label: "Tipo de Conta",
        tipo: SafiraTipoCampo.AUTOCOMPLETE
      },
      { nome: "ativa", label: "Ativa", tipo: SafiraTipoCampo.UNITARIO },
      { nome: "limiteCreditoEspecial", label: "Limite de crédito especial" },
      {
        nome: "percentJurosCredEspecial",
        label: "Percentual de juros do crédito especial"
      },
      { nome: "limiteCapitalGiro", label: "Limite de Capital de Giro" },
      {
        nome: "percentJurosCapitalGiro",
        label: "Percentual de Juros do capital de giro"
      },
      { nome: "codigoCarteira", label: "Codigo Carteira" },
      { nome: "codigoComplemento", label: "Codigo Complemento" },
      { nome: "codigoTransmissao", label: "Codigo Transmissão" }
    ]
  };

  return <DominioView formProps={formProps} />;
};
