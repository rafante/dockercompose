import React from "react";
import DominioView from "../../../components/safira_dominio_view";
import { SafiraFormProps } from "../../../components/safira_form";

export default () => {
  //falta os check box que são cliente,fornecedor,transportadora,representante de venda
  var formProps: SafiraFormProps = {
    caminhoNoServidor: "/parceiroNegocios",
    labelDominio: "Parceiro de Negócios",
    campos: [
      { nome: "cnpj_cpf", label: "CNPJ/CPF" },
      { nome: "endereco_comercial", label: "Endereço Comercial" },
      { nome: "nome", label: "Nome" },
      { nome: "cliente", label: "Cliente" },
      { nome: "fornecedor", label: "Fornecedor" },
      { nome: "representanteVenda", label: "Representante de Venda" },
      { nome: "transportadora", label: "Transportadora" },
      { nome: "apelido", label: "Apelido" },
      { nome: "inscricao_estadual", label: "Inscrição Estadual" },
      { nome: "grupo_parceiro_id", label: "Grupo de Parceiro" },
      { nome: "sub_grupo_parceiro_id", label: "SubGrupo de Parceiro" }
    ]
  };

  return <DominioView formProps={formProps} />;
};
