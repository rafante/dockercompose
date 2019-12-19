import React from "react";
import DominioView from "../../../components/safira_dominio_view";
import { SafiraFormProps } from "../../../components/safira_form";
import { SafiraTipoCampo } from "../../../components";

export default () => {
  const formProps: SafiraFormProps = {
    caminhoNoServidor: "/material",
    labelDominio: "Material",
    campos: [
      { nome: "descricao", label: "Descrição" },
      {
        nome: "tipo_material",
        label: "Tipo de Material",
        tipo: SafiraTipoCampo.SELECT,
        valoresSelect: [
          { valor: "normal", label: "Normal" },
          { valor: "composicao", label: "Composição" }
        ]
      },
      {
        nome: "controleLoteValidade",
        label: "Controle Lote",
        tipo: SafiraTipoCampo.UNITARIO
      },
      { nome: "finalidade", label: "Finalidade", tipo: SafiraTipoCampo.AUTOCOMPLETE },
      {
        nome: "vendido_separadamente",
        label: "Vnedido Separadamente",
        tipo: SafiraTipoCampo.UNITARIO
      },
      { nome: "apelido", label: "Apelido" },
      {
        nome: "unidade_medida->descricao",
        label: "Unidade de Medida",
        tipo: SafiraTipoCampo.SELECT
      },
      { nome: "ncm", label: "NCM" },
      { nome: "ean", label: "EAN" },
      { nome: "custo_total", label: "Custo Total" },
      { nome: "peso", label: "Peso" },
      { nome: "grupo->descricao", label: "Grupo", tipo: SafiraTipoCampo.AUTOCOMPLETE },
      { nome: "sub_grupo->descricao", label: "SubGrupo", tipo: SafiraTipoCampo.AUTOCOMPLETE },
      {
        nome: "grupo_tributacao",
        label: "Grupo de Trubutação",
        tipo: SafiraTipoCampo.AUTOCOMPLETE
      },
      {
        nome: "localizacao",
        label: "Localização",
        tipo: SafiraTipoCampo.AUTOCOMPLETE
      }
    ]
  };

  return <DominioView formProps={formProps} />;
};
