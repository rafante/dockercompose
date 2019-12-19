export { default as SafiraFiltroTela } from './safira_filtro_tela';
export { default as SafiraGrid } from './safira_grid';
export { default as SafiraInput } from './safira_input';
export { default as SafiraForm } from './safira_form';
export { default as SafiraDominioView } from './safira_dominio_view';
export enum SafiraTipoCampo { INPUT, SELECT, UNITARIO, AUTOCOMPLETE, STEP, DATA, NUMERICO }

export type SafiraFormOperacao = {
    nome: string,
    labe: string,
    valor: string,
}
export type SafiraFormCampo = {
    nome: string,
    label: string,
    valor?: object,
    tipo?: SafiraTipoCampo,
    valoresSelect?: Array<ValorSelect>,
    placeHolder?: string,
    valoresStep?: Array<ValorStep>,
    camposTotalizados?: Array<string>,
    autocompletar?: AutocompletarProps,
    caminhoNoServidor?: string,
    operacoes?: Array<SafiraFormOperacao>,
}
export type SafiraFormCamposProps = {
    caminhoNoServidor: string,
    camposGrid?: Array<string>,
    campos: Array<SafiraFormCampo>,
}

export type ValorSelect = {
    valor: string;
    nome?: string;
    label: string;
};

/**
 * @param proximoStep nome do step seguinte.  se informado obriga o ususario ao proximo 
 * step informado caso ao contrario deixe escolha livre 
 */
export type ValorStep = {
    nome: string,
    labbel?: string,
    isVisivel: Function,
    proximoStep?: string,
};

/**
 * Propriedades de autocompletar
 */
export type AutocompletarProps = {
    caminhoNoServidor: string
}

export type SafiraInputProps = {
    label: string,
    nome: string,
    tipo?: SafiraTipoCampo,
    valoresSelect?: Array<ValorSelect>,
    placeHolder?: string,
    valoresStep?: Array<ValorStep>,
    camposTotalizados?: Array<string>,
    autocompletar?: AutocompletarProps
};
// export { default as BarraPesquisaGeral } from './barra_pesquisa_geral';