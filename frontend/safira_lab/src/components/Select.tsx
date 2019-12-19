import React from "react";
import { Classes } from "@blueprintjs/core";

export type Opcao = {
  valor: string;
  nome?: string;
  label?: string;
};

export type Opcoes = {
  opcoes: Array<Opcao>;
};

export default ({ opcoes }: Opcoes) => {
  function formarOpcoes() {
    var selectKey = 0;
    return opcoes.map(opcao => (
      <option key={"select_option" + ++selectKey} value={opcao.valor}>
        {opcao.nome}
      </option>
    ));
  }
  return (
    <div className={Classes.SELECT}>
      <select>{formarOpcoes()}</select>
    </div>
  );
};
