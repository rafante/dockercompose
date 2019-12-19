import React from "react";
import SafiraDominioView from "../../../components/safira_dominio_view";
import { SafiraFormProps } from "../../../components/safira_form";
import { SafiraTipoCampo } from "../../../components";

export default () => {
  const formProps: SafiraFormProps = {
    caminhoNoServidor: "/subGrupoParceiroNegocios",
    labelDominio: "Subgrupo de Parceiro de Negócios",
    campos: [
      {
        label: "Grupo de Parceiro",
        nome: "grupo",
        autocompletar: {
          caminhoNoServidor: '/subGrupoParceiroNegocios'
        },
        tipo: SafiraTipoCampo.AUTOCOMPLETE,
        caminhoNoServidor: '/grupoParceiroNegocios'
      },
      {
        label: "Descrição",
        nome: "descricao"
      }
    ]
  };

  return <SafiraDominioView formProps={formProps} />;
};
