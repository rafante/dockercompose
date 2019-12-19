import React from 'react';
import { useSelector } from 'react-redux';
import { Navbar, NavbarGroup, Button, NavbarHeading, Card, InputGroup, Divider } from '@blueprintjs/core';

export default function () {
    const modulo = useSelector(function (state: any) {
        return state.aplicacao.contextoSelecionado;
    });
    function tabChange() {

    }

    function navBarFilhos() {
        return (
            <>
                <NavbarGroup>
                    <NavbarHeading>
                        <InputGroup leftIcon="search" className="conteudo_barra_top_left" />
                    </NavbarHeading>
                </NavbarGroup>
                <NavbarGroup align="right" className="conteudo_barra_navbar">
                    <Button minimal icon="list"></Button>
                    <Button minimal icon="search-template"></Button>
                    <Button minimal icon="edit"></Button>
                    <Button minimal intent="danger" icon="trash"></Button>
                </NavbarGroup>
            </>
        );
    }

    return (
        <div className="conteudo_barra_top">
            <div className="conteudo_barra_pesquisa" >
                <div>
                    <Navbar children={navBarFilhos()} />
                </div>
            </div>
        </div>
    )
}