import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { SafiraFiltroTela, SafiraTipoCampo } from '../components';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Vejamos...', () => {
  const div = document.createElement('div');
  var campos = [
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
  ReactDOM.render(<SafiraFiltroTela caminhoNoServidor='localhost:8080/material' campos={campos} />, div);
  ReactDOM.unmountComponentAtNode(div);
})