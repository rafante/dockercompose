import React, { useState, useEffect } from "react";
import { Tree, ITreeNode } from '@blueprintjs/core';
import { useDispatch } from 'react-redux';
import "./menu.scss";

/**
 * Renderiza um Menu em formato de árvore com ramificações de acordo com
 * os contextos carregados do arquivo ./contextos.tsx
 */
export default () => {
  const [ativo, setAtivo] = useState(0);
  const [selecionado, setSelecionado] = useState(0);
  const [menuItems, setMenuItems] = useState();
  const [menuFlat, setMenuFlat] = useState();
  const dispatch = useDispatch();
  // const contextoSelecionado = useSelector((state: any) => state.aplicacao.contextoSelecionado);

  /**
   * Carregar os contextos não é algo síncrono, por isso, o useEffects aqui
   * não monitora nenhuma variável (indicando que só ocorrerá uma vez) e ele 
   * chama de forma assíncrona (embora com await) o import. Quando o import
   * retorna com o default (que é o array de contextos), ele dá um setMenuItems
   * que atualiza os menuItems para serem os importados do arquivo ./contextos.tsx
   * e o componente se redesenha desta vez já de posse dos contextos
   */
  useEffect(() => {
    let buscaContextos = async () => {
      let items = await import('../../contextos/contextos');
      setMenuItems(items.default);
      setMenuFlat(items.menuItemsFlat());
    }
    buscaContextos();
  }, [])

  /**
   * Esta função verifica se o nó possui filhos,
   * se sim, expande os filhos com um setAtivo passando
   * o id do pai. A propriedade isExpanded nos nodes
   * está ligada ao fato de o id daquele node ser o mesmo
   * do state ativo
   * @param dados Um nó da árvore de nós
   */
  function expandir(dados: ITreeNode) {
    if (dados.childNodes && dados.childNodes.length) {
      if (ativo === dados.id)
        setAtivo(0);
      else
        setAtivo(Number(dados.id));
    }
  }

  function click(dados: ITreeNode) {
    expandir(dados);
    selecionar(dados);
  }

  function selecionar(dados: ITreeNode) {
    if (!dados.childNodes || !dados.childNodes.length) {
      setSelecionado(Number(dados.id));
      var item = menuFlat.find((item: any) => item.id === dados.id);
      dispatch({
        type: 'selecionar-contexto',
        payload: {
          item: item
        }
      })
    }
  }

  /**
   * Cria um ITreeNode (necessário para a Tree). A partir das propriedades
   * desse array de contextos ele monta um ITreeNode. Esta função é recurssiva,
   * ou seja, se o node tiver filhos, ela chama ela mesma para cada filho
   * @param dados Um objeto do array de contextos
   */
  function itemNode(dados: any) {
    var node: ITreeNode;
    node = {
      id: dados.id,
      label: dados.label,
      className: 'menu_item',
      isSelected: dados.id === selecionado,
      isExpanded: dados.id === ativo,
      hasCaret: dados.items && dados.items.length ? true : false,
      icon: dados.icon,
      childNodes: dados.items ? dados.items.map((item: any) => itemNode(item)) : []
    }
    return node;
  }

  /**
   * Monta um array de ITreeNodes necessário à propriedade contents do componente
   * Tree do Blueprint JS que monta uma árvore de contextos
   */
  function itemNodes() {
    var menu: Array<ITreeNode> = []
    menu = menuItems.map((item: any) => itemNode(item));
    return menu;
  }

  /**
   * Se os menuItems Ainda Não tiverem sido carregados, retorna uma Tree
   * vazia
   */
  if (!menuItems) {
    return <Tree contents={[]} />
  }

  /**
   * Se os menuItems já tiverem sido carregados retorna uma Tree com um array de
   * ITreeNodes formados na função itemNodes
   */
  return (
    <div className="menu_tree">
      <Tree contents={itemNodes()} onNodeClick={(node) => click(node)} />
    </div>
  );
};
