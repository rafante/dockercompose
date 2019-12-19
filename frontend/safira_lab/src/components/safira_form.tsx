import React from 'react';
import { Card, Button, Checkbox } from '@blueprintjs/core';
import { SafiraInput, SafiraTipoCampo, SafiraFormCampo } from '.';
import { Modo } from './safira_dominio_view';
import Axios from 'axios';
import { useSelector } from 'react-redux';
import Select from './Select';
import './css/safira_form.scss'
import SafiraArrays from '../ferramentas/safira_arrays';

export type SafiraFormProps = {
    modo?: Modo,
    labelDominio: string,
    tituloCriar?: string,
    tituloEditar?: string,
    tituloVisualizar?: string,
    tituloListar?: string,
    caminhoNoServidor: string,
    sucessoAoSalvar?: Function,
    falhaAoSalvar?: Function,
    campos: Array<SafiraFormCampo>
}

export default (props: SafiraFormProps) => {
    const nomeForm = props.caminhoNoServidor + '_form';
    const form = useSelector((state: any) => state.contexto);

    function renderizar() {
        var chave = 0;
        return props.campos.map((campo) => {
            if (campo.tipo === SafiraTipoCampo.SELECT && campo.valoresSelect)
                return <Select opcoes={campo.valoresSelect} />
            if (campo.tipo === SafiraTipoCampo.UNITARIO)
                return <Checkbox form={nomeForm} name={campo.nome} label={campo.label} />
            var habilitado = props.modo !== Modo.VISUALIZAR && campo.nome.toLowerCase() !== 'id';
            if (campo.nome !== 'id' || props.modo !== Modo.CRIAR)
                return <SafiraInput key={'safira_input_field_' + ++chave}
                    label={campo.label}
                    nome={campo.nome}
                    valor={campo.valor}
                    form={nomeForm}
                    habilitado={habilitado}
                    placeHolder={campo.placeHolder} />
        });
    }

    function salvar() {
        if (!props.modo)
            props.modo = Modo.CRIAR;
        if (form) {
            var newForm: any = SafiraArrays.quebraObjeto({ objeto: form });
            Axios.post(props.caminhoNoServidor, newForm, {
                headers: [{ 'Content-Type': 'application/json' }]
            }).then((resposta) => {
                if (props.sucessoAoSalvar)
                    props.sucessoAoSalvar()
                else
                    alert(resposta.status + ' - ' + resposta.statusText)
            }).catch((erro) => {
                if (props.falhaAoSalvar)
                    props.falhaAoSalvar(erro)
                else
                    alert(`Erro: ${erro}`)
            });
        }
    }

    return (
        <Card>
            <form id={nomeForm} className="safira_form">
                {renderizar()}
            </form>
            <Button intent="primary" onClick={() => salvar()} >Salvar</Button>
        </Card>
    );
}
