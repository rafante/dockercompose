import React, { useState, useEffect } from "react";
import {
  Button,
  ControlGroup,
  InputGroup,
  Text,
  Collapse,
  Card
} from "@blueprintjs/core";
import { SafiraGrid, SafiraFormCamposProps, SafiraTipoCampo } from ".";
import Select from "./Select";
import Axios from "axios";

import "./css/filtro.scss";

export default ({ campos, camposGrid, caminhoNoServidor }: SafiraFormCamposProps) => {
  const [aberto, setAberto] = useState(false);
  const [filtros, setFiltros] = useState({});
  const [dadosBuscados, setDadosBuscados] = useState();

  useEffect(() => buscaDados(), []);

  function opcoesSelect() {
    return [
      { nome: "Igual a", valor: "eq" },
      { nome: "Diferente de", valor: "ne" },
      { nome: "Entre", valor: "bt" },
      { nome: "Menor que", valor: "lt" },
      { nome: "Menor ou igual a", valor: "le" },
      { nome: "Maior que", valor: "gt" },
      { nome: "Maior ou igual a", valor: "ge" }
    ];
  }

  function constroiCampos() {
    var filtroKey = 0;
    return campos.map(campo => {
      var operacoes = campo.operacoes ? campo.operacoes : opcoesSelect();
      var tipo = campo.tipo ? campo.tipo : SafiraTipoCampo.INPUT;
      switch (tipo) {
        case SafiraTipoCampo.INPUT:
          break;
        case SafiraTipoCampo.SELECT:
          break;
        case SafiraTipoCampo.UNITARIO:
          break;
      }

      return (
        <ControlGroup
          className="filtro_campo"
          key={"filtro_campo" + ++filtroKey}
        >
          <Text className="filtro_campo_nome">{campo.label}</Text>
          <Select opcoes={operacoes} />
          <InputGroup
            className="filtro_campo_input"
            onChange={(e: any) =>
              setFiltros({ ...filtros, [campo.nome]: e.target.value })
            }
          />
        </ControlGroup>
      );
    });
  }

  function buscaDados() {
    let host = 'http://safira-api:8080/safira_api';
    Axios.get(host + caminhoNoServidor, {
      data: filtros
    })
      .then(resposta => {
        setDadosBuscados(resposta.data);
      })
      .catch(erro => {
        console.log(erro);
      });
  }

  function exibeGridDados() {
    if (!dadosBuscados) return <div></div>;
    if (!camposGrid) camposGrid = campos.map(campo => campo.nome);
    return < SafiraGrid colunas={camposGrid} linhas={dadosBuscados} campos={campos} />;
  }

  return (
    <>
      <div>
        <Button fill onClick={() => setAberto(anterior => !anterior)}>
          Filtros
        </Button>
        <Collapse isOpen={aberto}>
          <Card>
            {constroiCampos()}

            <Button icon="search" intent="primary" onClick={() => buscaDados()}>
              Buscar
            </Button>
          </Card>
        </Collapse>

        <Collapse isOpen={dadosBuscados != null}>
          <Card className="card_grid_conteudo">{exibeGridDados()}</Card>
        </Collapse>
      </div>
      <br />
    </>
  );
};
