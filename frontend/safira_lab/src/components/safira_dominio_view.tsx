import React, { useState } from 'react';
import { Navbar, NavbarGroup, ButtonGroup, Button, NavbarHeading, Intent } from '@blueprintjs/core';
import { SafiraFormProps } from './safira_form';
import { SafiraFiltroTela, SafiraForm } from '.';
import './css/dominio_view.scss'
import { useSelector, useDispatch } from 'react-redux';

export enum Modo {
    VISUALIZAR, EDITAR, LISTAR, CRIAR
}

type SafiraDominioProps = {
    classeCSS?: string,
    listar?: JSX.Element,
    criar?: JSX.Element,
    visualizar?: JSX.Element,
    editar?: JSX.Element,
    formProps: SafiraFormProps
}

/**
 * Renderiza um domínio. Dependendo do modo, renderiza algum compoenente
 */
export default ({ classeCSS = '', listar, criar, visualizar, editar, formProps }: SafiraDominioProps) => {
    // const [modo, setModo] = useState(Modo.LISTAR)
    const [titulo] = useState(formProps.labelDominio);
    const dispatch = useDispatch();
    const modo: Modo = useSelector((state: any) => {
        if (state.aplicacao.objeto)
            return state.aplicacao.objeto.modo;
        return Modo.LISTAR;
    })
    const objetoSelecionado = useSelector((state: any) => {
        return state.aplicacao.objeto
    });

    const formaTitulo = {
        [Modo.CRIAR]: () => titulo + ' - Criar',
        [Modo.EDITAR]: () => titulo + ' - Editar',
        [Modo.LISTAR]: () => titulo + ' - Listar',
        [Modo.VISUALIZAR]: () => titulo + ' - Visualizar',
    }

    function listagem() {
        return listar ? listar :
            <SafiraFiltroTela caminhoNoServidor={formProps.caminhoNoServidor} campos={formProps.campos} />
    }

    function edicao() {
        return editar ? editar : getForm(Modo.EDITAR);
    }

    function visualizacao() {
        return visualizar ? visualizar : getForm(Modo.VISUALIZAR);
    }

    function criacao() {
        return criar ? criar : getForm(Modo.CRIAR)
    }

    function limpaCampos() {
        formProps.campos.map((campo) => {
            delete campo['valor'];
        })
    }

    function setModo(modo: Modo) {
        var payloads = {
            [Modo.LISTAR]: undefined,
            [Modo.CRIAR]: { ...objetoSelecionado, modo: modo, props: {} },
            [Modo.VISUALIZAR]: { ...objetoSelecionado, modo: modo },
            [Modo.EDITAR]: { ...objetoSelecionado, modo: modo },
        }
        // if (modo === Modo.CRIAR)
        //     limpaCampos();
        dispatch({
            type: 'abrir-objeto',
            payload: payloads[modo]
        });
    }

    function getForm(modo: Modo, sucessoAoSalvar = () => setModo(Modo.LISTAR), falhaAoSalvar = (e: string) => alert(`Falha ao salvar: ${e}`)) {
        if (objetoSelecionado) {
            var chaves = Object.keys(objetoSelecionado.props);
            chaves.forEach((chave) => {
                var campo = formProps.campos.find((cpo) => cpo.nome === chave);
                if (campo) {
                    if (modo !== Modo.CRIAR)
                        campo.valor = objetoSelecionado.props[chave];
                } else {
                    var camposContidos = '';
                    // formProps.campos.forEach((c) => {
                    //     camposContidos += `| ${c.nome} |\n`
                    // })
                    // throw Error(`Campo ${chave} não presente no grid. Apenas constam os campos: ${camposContidos}`)
                }
            })
        }
        return <SafiraForm
            modo={modo}
            labelDominio={formProps.labelDominio}
            caminhoNoServidor={formProps.caminhoNoServidor}
            tituloCriar={formProps.tituloCriar}
            tituloListar={formProps.tituloListar}
            tituloEditar={formProps.tituloEditar}
            tituloVisualizar={formProps.tituloVisualizar}
            falhaAoSalvar={falhaAoSalvar}
            sucessoAoSalvar={sucessoAoSalvar}
            campos={formProps.campos}
        />;
    }

    function visualizarEditarHabilitado() {
        return objetoSelecionado !== undefined && objetoSelecionado.props && objetoSelecionado.props.id
    }

    function renderizar() {
        var conteudo = <div></div>
        if (objetoSelecionado) {
            if (objetoSelecionado.modo === Modo.VISUALIZAR)
                conteudo = visualizacao();
            else if (objetoSelecionado.modo === Modo.EDITAR)
                conteudo = edicao();
            else if (objetoSelecionado.modo === Modo.CRIAR)
                conteudo = criacao();
            else throw Error('Modo não selecionado, necessário definir entre VISUALIZAR, CRIAR ou EDITAR');
        } else {
            conteudo = listagem();
            // switch (modo) {
            //     case Modo.LISTAR:
            //         conteudo = listagem();
            //         break;
            //     case Modo.CRIAR:
            //         conteudo = criacao();
            //         break;
            //     case Modo.EDITAR:
            //         conteudo = edicao();
            //         break
            //     case Modo.VISUALIZAR:
            //         conteudo = visualizacao();
            //         break
            // }
        }
        return <div className="dominio_view">
            <Navbar className="dominio_view_navbar">
                <NavbarGroup align="left">
                    <NavbarHeading>{formaTitulo[modo]()}</NavbarHeading>
                </NavbarGroup>
                <NavbarGroup align="right">
                    <ButtonGroup minimal>
                        <Button icon="list" intent={btnsCor(Modo.LISTAR)} title="Listar" onClick={() => setModo(Modo.LISTAR)} />
                        <Button icon="new-object" intent={btnsCor(Modo.CRIAR)} title="Criar" onClick={() => setModo(Modo.CRIAR)} />
                        <Button icon="edit" intent={btnsCor(Modo.EDITAR)} disabled={!visualizarEditarHabilitado()} title="Editar" onClick={() => setModo(Modo.EDITAR)} />
                        <Button icon="presentation" intent={btnsCor(Modo.VISUALIZAR)} disabled={!visualizarEditarHabilitado()} title="Visualizar" onClick={() => setModo(Modo.VISUALIZAR)} />
                    </ButtonGroup>
                </NavbarGroup>
            </Navbar>
            <div className="dominio_view_conteudo">
                {conteudo}
            </div>
        </div>
    }

    function btnsCor(m: Modo) {
        if (modo === m)
            return Intent.PRIMARY;
        return Intent.NONE
    }

    if (!formProps.campos.find((campo) => campo.nome === 'id'))
        formProps.campos = [{ nome: "id", label: "Id" }].concat(formProps.campos);

    return (
        <div className={classeCSS}>
            {renderizar()}
        </div>
    );
}
