import React from "react";
import DominioView from "../../../components/safira_dominio_view";
import { SafiraFormProps } from "../../../components/safira_form";
import { SafiraTipoCampo } from "../../../components";

export default () => {
  const formProps: SafiraFormProps = {
    caminhoNoServidor: "/movimentoFinanceiro",
    labelDominio: "Movimento Financeiro",
    campos: [
      { nome: "numeroDocumento", label: "Numero do Documento" },
      {
        nome: "tipoDocumento",
        label: "Tipo do documento",
        tipo: SafiraTipoCampo.SELECT
      },
      {
        nome: "estornado",
        label: "Estornado",
        tipo: SafiraTipoCampo.UNITARIO
      },
      {
        nome: "conciliado",
        label: "Conciliado",
        tipo: SafiraTipoCampo.UNITARIO
      },
      {
        nome: "eEstorno",
        label: "É Estornado",
        tipo: SafiraTipoCampo.UNITARIO
      },
      { nome: "descricao", label: "Descrição" },
      {
        nome: "dataDocumento",
        label: "Data do Documento",
        tipo: SafiraTipoCampo.DATA
      },
      { nome: "dataEmissao", label: "Data da Emissão", tipo: SafiraTipoCampo.DATA },
      {
        nome: "historicoPadrao",
        label: "Historico padrão",
        tipo: SafiraTipoCampo.AUTOCOMPLETE
      },
      { nome: "valor", label: "Valor" },
      {
        nome: "debito_credito",
        label: "Débito/Crédito",
        tipo: SafiraTipoCampo.SELECT,
        valoresSelect: [
          { valor: "DEBITO", label: "Débito" },
          { valor: "CREDITO", label: "Crédito" }
        ]
      },
      {
        nome: "planoContas",
        label: "Plano da Contas",
        tipo: SafiraTipoCampo.AUTOCOMPLETE
      },
      {
        nome: "contaCorrente",
        label: "Conta Corrente",
        tipo: SafiraTipoCampo.AUTOCOMPLETE
      },
      {
        nome: "formaPagamento",
        label: "Forma de pagamento",
        tipo: SafiraTipoCampo.SELECT
      }
    ]
  };

  return <DominioView formProps={formProps} />;
};
