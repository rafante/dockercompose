import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Table } from 'semantic-ui-react';
import { SafiraFormCampo } from '.';
import './css/safira_table_grid.scss';
import { Modo } from './safira_dominio_view';

type GridProps = {
    campos: Array<SafiraFormCampo>
    colunas: Array<string>
    linhas: Array<any>
}

export default ({ colunas, linhas, campos, }: GridProps) => {
    const dispatch = useDispatch();
    const [menuFlat, setMenuFlat] = useState()

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
            let items = await import('../contextos/contextos');
            setMenuFlat(items.menuItemsFlat());
        }
        buscaContextos();
    }, [])

    function renderizar() {
        if (!linhas || !linhas.length)
            return <div>Dados não carregados ainda</div>
        return (
            <Table striped className="safira_table_grid">
                {criarCabecalho()}
                {criarCorpo()}
            </Table>
        );
    }

    function criarCorpo() {
        return <Table.Body>
            {criarLinhas()}
        </Table.Body>
    }

    function criarCabecalho() {
        var chave = -1;
        return <Table.Header >
            <Table.Row key={'table_grid_row_body' + ++chave}>
                {colunas.map((coluna) => <Table.HeaderCell key={'table_grid_cell_header' + ++chave}>{campoPorcoluna(coluna).label}</Table.HeaderCell>)}
            </Table.Row>
        </Table.Header>
    }

    function campoPorcoluna(coluna: string) {
        let campo = campos.find((c) => c.nome === coluna);
        if (!campo)
            campo = campos[0];
        return campo;
    }

    function criarLinhas() {
        var chave = 0;
        return linhas.map((item: any) =>
            <Table.Row key={'table_grid_row_body' + ++chave}>
                {colunas.map((coluna) => {
                    return <Table.Cell selectable key={'table_grid_cell_body' + ++chave}>
                        {criaCelula(item, campos.find((campo) => campo.nome === coluna))}
                    </Table.Cell>
                })}
            </Table.Row>
        );
    }

    function criaCelula(item: any, campo?: SafiraFormCampo) {
        if (campo) {
            let conteudo = buscaProp(item, campo.nome);
            if (conteudo)
                conteudo = conteudo.toString();
            if (campo.caminhoNoServidor) {
                return <a href="#" onClick={() => chamaDominio(String(campo.caminhoNoServidor))}>{conteudo}</a>;
            }
            if (campo.nome.toLowerCase() === 'id') {
                return <a href="#" onClick={() => abreObjeto(String(campo.caminhoNoServidor), item)}>{conteudo}</a>
            }
            return conteudo;
        }
        return '';
    }

    /**
     * Dispara uma action que indica à aplicação que o objeto será aberto
     * ou em modo de edição ou de visualização
     * @param campo campo contendo o id do objeto que será aberto
     * @param id o id do objeto
     */
    function abreObjeto(dominio: string, objeto: object) {
        dispatch({
            type: 'abrir-objeto',
            payload: {
                dominio: dominio,
                props: objeto,
                modo: Modo.VISUALIZAR
            }
        })
    }

    function buscaProp(objeto: any, prop: string): any {
        if (!prop.includes('->'))
            return objeto[prop];
        var split = prop.split('->');
        var primeiro = split.shift();
        var proximo = split.length > 1 ? split.join('->') : split[0];
        if (!objeto[String(primeiro)])
            return undefined;
        return buscaProp(objeto[String(primeiro)], String(proximo));
    }

    function chamaDominio(caminhoNoServidor: string) {
        let contextoSelecionao = menuFlat.find((c: any) => c.server === caminhoNoServidor);
        dispatch({
            type: 'selecionar-contexto',
            payload: {
                item: contextoSelecionao
            }
        })
    }

    return (
        <div>
            {renderizar()}
        </div>
    );
}
