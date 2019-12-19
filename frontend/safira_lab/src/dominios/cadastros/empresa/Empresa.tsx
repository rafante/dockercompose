import React from "react";
import DominioView from "../../../components/safira_dominio_view";
import { SafiraFormProps } from "../../../components/safira_form";
import { SafiraTipoCampo } from "../../../components";

export default () => {
  var formProps: SafiraFormProps = {
    caminhoNoServidor: "/empresa",
    labelDominio: "Empresa",
    campos: [
      { label: "Nome", nome: "nome" },
      {
        label: "Empresa(Matriz)",
        nome: "empresa",
        tipo: SafiraTipoCampo.AUTOCOMPLETE,
        autocompletar: {
          caminhoNoServidor: '/empresa'
        }
      },
      { label: "Apelido", nome: "apelido" },
      { label: "CNPJ/CPF", nome: "cnpj_cpf" },
      { label: "Iscrição Estadual", nome: "inscricao_estadual" }
    ]
  };

  return <DominioView formProps={formProps} />;
};
