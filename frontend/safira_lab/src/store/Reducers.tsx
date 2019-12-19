import { combineReducers } from "redux";

const INICIAL_APLICACAO = {
  contextoSelecionado: undefined
}
const INICIAL_CONTEXTO = {

}

function contextoReducer(state: any = INICIAL_CONTEXTO, action: { type: string; payload?: { nome?: any; valor?: any; }; }) {
  if (action.type === 'preenche-valores-form') {
    if (action.payload && action.payload.nome && action.payload.valor !== undefined) {
      return { ...state, [action.payload.nome]: action.payload.valor }
    }
  }
  return state;
}

function aplicacaoReducer(state: any = INICIAL_APLICACAO, action: any) {
  if (action.type === 'selecionar-contexto') {
    state = { ...state, contextoSelecionado: action.payload.item, objeto: undefined }
  } else if (action.type === 'abrir-objeto') {
    return { ...state, objeto: action.payload }
  }
  return state;
}

const reducersCombinados = combineReducers({
  aplicacao: aplicacaoReducer,
  contexto: contextoReducer,
});

export default reducersCombinados;
