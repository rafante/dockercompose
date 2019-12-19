import { IconNames } from "@blueprintjs/icons";
const contextos: Array<any> = [
  {
    label: "Dashboard",
    icon: IconNames.DASHBOARD
  },
  {
    label: "Cadastro",
    icon: IconNames.ANNOTATION,
    items: [
      {
        label: "Empresa",
        icon: IconNames.COMPARISON,
        server: "/empresa"
      },
      {
        label: "Grupo de Parceiro",
        icon: IconNames.HEAT_GRID,
        server: "/grupoParceiroNegocios"
      },
      {
        label: "SubGrupo de Parceiro",
        icon: IconNames.HEAT_GRID,
        server: "/subGrupoParceiroNegocios"
      },
      {
        label: "Parceiro de Negócios",
        icon: IconNames.PERSON,
        server: "/parceiroNegocios"
      },
      {
        label: "Centro de Custo",
        icon: IconNames.HEAT_GRID,
        server: "/centroCusto"
      },
      {
        label: "Plano de Contas",
        icon: IconNames.HEAT_GRID,
        server: "/planoContas"
      },
      {
        label: "Forma de Pagamento",
        icon: IconNames.HEAT_GRID,
        server: "/formaPagamento"
      },
      {
        label: "Prazo de Pagamento",
        icon: IconNames.HEAT_GRID,
        server: "/prazoPagamento"
      },
      {
        label: "Tipo de Documento",
        icon: IconNames.HEAT_GRID,
        server: "/tipoDocumento"
      },
      {
        label: "Município",
        icon: IconNames.HEAT_GRID,
        server: "/municipio"
      }
    ]
  },
  {
    label: "Estoque",
    icon: IconNames.BOX,
    items: [
      {
        label: "Grupo de Material",
        icon: IconNames.HEAT_GRID,
        server: "/grupo"
      },
      {
        label: "SubGrupo de Material",
        icon: IconNames.HEAT_GRID,
        server: "/subGrupo"
      },
      {
        label: "Unidade de Medida",
        icon: IconNames.HEAT_GRID,
        server: "/unidadeMedida"
      },
      {
        label: "Localização",
        icon: IconNames.HEAT_GRID,
        server: "/localizacao"
      },
      {
        label: "Material",
        icon: IconNames.CUBE,
        server: "/material"
      },
      {
        label: "Entrada de Material",
        icon: IconNames.CUBE_ADD,
        server: "/entradaMaterial"
      },
      {
        label: "Movimento de Material",
        icon: IconNames.EXCHANGE,
        server: "/movimentoMaterial"
      },
      {
        label: "Recipiente",
        icon: IconNames.HEAT_GRID,
        server: "/recipiente"
      },
      {
        label: "Importação",
        icon: IconNames.HEAT_GRID,
        server: "/importacao"
      }
    ]
  },
  {
    label: "Financeiro",
    icon: IconNames.DOLLAR,
    items: [
      {
        label: "Banco",
        icon: IconNames.HEAT_GRID,
        server: "/banco"
      },
      {
        label: "Conta Corrente",
        icon: IconNames.HEAT_GRID,
        server: "/contaCorrente"
      },
      {
        label: "Histórico Padrão",
        icon: IconNames.HEAT_GRID,
        server: "/historicoPadrao"
      },
      {
        label: "Contas a Pagar",
        icon: IconNames.CALCULATOR,
        server: "/contaPagar"
      },
      {
        label: "Baixa em Bloco - Pagar",
        icon: IconNames.HEAT_GRID,
        server: "/baixaEmBlocoPagar"
      },
      {
        label: "Contas a Receber",
        icon: IconNames.HEAT_GRID,
        server: "/contaReceber"
      },
      {
        label: "Baixa em Bloco - Receber",
        icon: IconNames.HEAT_GRID,
        server: "/baixaEmBlocoReceber"
      },
      {
        label: "Movimento Financeiro",
        icon: IconNames.HEAT_GRID,
        server: "/movimentoFinanceiro"
      },
      {
        label: "Transferência de Contas",
        icon: IconNames.HEAT_GRID,
        server: "/transferenciaContas"
      },
      {
        label: "Boleto",
        icon: IconNames.HEAT_GRID,
        server: "/boleto"
      },
      {
        label: "Arquivo de Remessa",
        icon: IconNames.HEAT_GRID,
        server: "/arquivoRemessa"
      }
    ]
  },
  {
    label: "Esmeralda Visual",
    icon: IconNames.HEAT_GRID,
    items: [
      {
        label: "Exame",
        icon: IconNames.HEAT_GRID,
        server: "/exame"
      },
      {
        label: "Materiais por Exame",
        icon: IconNames.HEAT_GRID,
        server: "/materiaisPorExame"
      },
      {
        label: "Importar XML para importar exames EV",
        icon: IconNames.HEAT_GRID,
        server: "/"
      },
      {
        label: "Importar Caixa EV",
        icon: IconNames.HEAT_GRID,
        server: "/importarCaixaEV"
      },
      {
        label: "Importar NFe",
        icon: IconNames.HEAT_GRID,
        server: "/importar nfe"
      },
      {
        label: "Importar Faturas",
        icon: IconNames.HEAT_GRID,
        server: "/importarFaturas"
      },
      {
        label: "Importar Movimento de Exames",
        icon: IconNames.HEAT_GRID,
        server: "/importarMovimentoExames"
      }
    ]
  },
  {
    label: "Relatórios",
    icon: IconNames.CLIPBOARD,
    items: [
      {
        label: "Financeiro – Contas a Pagar – Analítico",
        icon: IconNames.HEAT_GRID,
        server: "/reportContaPagarAnalitico"
      },
      {
        label: "Financeiro – Contas a Receber – Analítico",
        icon: IconNames.HEAT_GRID,
        server: "/reportContaReceberAnalitico"
      },
      {
        label: "Financeiro – Movimentação",
        icon: IconNames.HEAT_GRID,
        server: "/reportMovimentacaoFinanceiro"
      },
      {
        label: "Financeiro – Balancete",
        icon: IconNames.BLOCKED_PERSON,
        server: "reportBalancete"
      },
      {
        label: "Estoque - Inventário",
        icon: IconNames.BLOCKED_PERSON,
        server: "reportInventario"
      },
      {
        label: "Financeiro – Balancete",
        icon: IconNames.BLOCKED_PERSON,
        server: "reportBalancete"
      },
      {
        label: "Estoque – Inventário",
        icon: IconNames.BLOCKED_PERSON,
        server: "reportInventario"
      },
      {
        label: "Estoque – Movimentação de Material",
        icon: IconNames.BLOCKED_PERSON,
        server: "reportEstoque"
      },
      {
        label: "Estoque – Mínimo",
        icon: IconNames.BLOCKED_PERSON,
        server: "reportEstoqueMinimo"
      },
      {
        label: "Estoque – Máximo",
        icon: IconNames.BLOCKED_PERSON,
        server: "reportEstoqueMaximo"
      },
      {
        label: "Estoque – Por Centro de Custo",
        icon: IconNames.BLOCKED_PERSON,
        server: "reportEstoqueMaximo"
      },
      {
        label: "Estoque – Materiais Utilizados",
        icon: IconNames.BLOCKED_PERSON,
        server: "reportEstoqueMaximo"
      },
      {
        label: "Estoque – Cadastro de Materiais",
        icon: IconNames.BLOCKED_PERSON,
        server: "reportCadastroMateriais"
      },
      {
        label: "Estoque – Composição de Materiais",
        icon: IconNames.BLOCKED_PERSON,
        server: "reportComposicaoMateriais"
      },
      {
        label: "Cadastro – Clientes / Fornecedor",
        icon: IconNames.BLOCKED_PERSON,
        server: "reportClientesFornecedor"
      },
      {
        label: "Cadastro – Plano de Contas",
        icon: IconNames.BLOCKED_PERSON,
        server: "reportPlanoContas"
      }
    ]
  }
];

var id = 0;
/**
 * retorna o item com um id gerado automaticamente para si e para seus itens filhos
 * ATENÇÃO: Atualmente suporta apenas 2 níveis
 * @param item o item atual
 * @param id o id atual
 */
function itemComId(item: any) {
  // console.table(item);
  if (item.items && item.items.length) {
    item.items = item.items.map((sub: any) => itemComId(sub));
  }
  return { ...item, id: ++id };
}

export default () => {
  return contextos.map(item => itemComId(item));
};

export function menuItemsFlat() {
  var items: Array<any> = [];
  contextos.forEach((item: any) => {
    items.push(item);
    if (item.items) {
      item.items.forEach((sub: any) => {
        items.push(sub);
      });
    }
  });
  return items;
}
