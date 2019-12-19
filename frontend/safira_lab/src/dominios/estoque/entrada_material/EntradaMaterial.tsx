import React from "react";
import DominioView from "../../../components/safira_dominio_view";
import { SafiraFormProps } from "../../../components/safira_form";
import { SafiraTipoCampo } from "../../../components";

export default () => {
  const formProps: SafiraFormProps = {
    caminhoNoServidor: "/entradaMaterial",
    labelDominio: "Entrada de Material",
    campos: [
      { nome: "status", label: "Status", tipo: SafiraTipoCampo.STEP },
      { nome: "data_pedido_compra", label: "Data do Pedido de Compra" },
      { nome: "data_entrada", label: "Data de Entrada" },
      { nome: "num_pedido_compra", label: "Pedido de Compra" },
      {
        nome: "tipoDocumento",
        label: "Tipo Documento",
        tipo: SafiraTipoCampo.AUTOCOMPLETE
      },
      { nome: "fornecedor", label: "Fornecedor", tipo: SafiraTipoCampo.AUTOCOMPLETE },
      { nome: "documento", label: "Documento" },
      { nome: "frete", label: "Frete" },
      { nome: "icms", label: "ICMS" },
      { nome: "ipi", label: "IPI" },
      { nome: "pis", label: "PIS" },
      { nome: "cofins", label: "Cofins" },
      { nome: "totalLiquido", label: "Total Líquido" },
      { nome: "totalImpostos", label: "Total Imposto" },
      { nome: "totalBruto", label: "Total Bruto" }
    ]
  };

  return <DominioView formProps={formProps} />;
};