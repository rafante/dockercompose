import React from "react";
import DominioView from "../../../components/safira_dominio_view";
import { SafiraFormProps } from "../../../components/safira_form";
import { SafiraTipoCampo } from "../../../components";

export default () => {
  const formProps: SafiraFormProps = {
    caminhoNoServidor: "/transferenciaConta",
    labelDominio: "Transferência de Contas",
    campos: [
      {
        nome: "estornado",
        label: "Estornado",
        tipo: SafiraTipoCampo.UNITARIO
      },
      {
        nome: "contaCorrenteOrigem",
        label: "Conta Corrente Origem",
        tipo: SafiraTipoCampo.AUTOCOMPLETE
      },
      {
        nome: "contaCorrenteDestino",
        label: "Conta Corrente Destino",
        tipo: SafiraTipoCampo.AUTOCOMPLETE
      },
      { nome: "data", label: "Data", tipo: SafiraTipoCampo.DATA },
      {
        nome: "historicoPadrao",
        label: "Historico Padrão",
        tipo: SafiraTipoCampo.AUTOCOMPLETE
      },
      { nome: "valor", label: "Valor" },
      { nome: "descricao", label: "Descrição" }
    ]
  };

  return <DominioView formProps={formProps} />;
};
