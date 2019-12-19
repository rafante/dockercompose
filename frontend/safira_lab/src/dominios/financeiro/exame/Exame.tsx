import React from "react";
import DominioView from "../../../components/safira_dominio_view";
import { SafiraFormProps } from "../../../components/safira_form";
import { SafiraTipoCampo } from "../../../components";

export default () => {
  const formProps: SafiraFormProps = {
    caminhoNoServidor: "/exame",
    labelDominio: "Exame",
    campos: [
      { nome: "ativo", label: "Ativo", tipo: SafiraTipoCampo.UNITARIO },
      { nome: "codExame", label: "Código do Exame" },
      { nome: "mnemonico", label: "Código Mnemônico" },
      { nome: "descricao", label: "Descirção" },
      { nome: "precoCusto", label: "Preço de Custo" },
      { nome: "precoVenda", label: "Preço de Venda" },
      { nome: "setor", label: "Seto", tipo: SafiraTipoCampo.AUTOCOMPLETE },
      {
        nome: "recipiente",
        label: "Recipiente",
        tipo: SafiraTipoCampo.AUTOCOMPLETE
      }
    ]
  };

  return <DominioView formProps={formProps} />;
};
