import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Label, InputGroup } from "@blueprintjs/core";

type InputProps = {
  label: string
  nome: string
  valor?: object
  form?: string
  habilitado?: boolean
  placeHolder?: string;
};

export default (props: InputProps) => {
  const [valorLocal, setValorLocal] = useState(
    /*form && form[props.nome] ? form[props.nome] :*/ props.valor
  );
  const dispatch = useDispatch();

  function setValor(e: { target: { value: any } }) {
    dispatch({
      type: "preenche-valores-form",
      payload: {
        nome: props.nome,
        valor: e.target.value
      }
    });
    setValorLocal(e.target.value);
  }

  return (
    <Label>
      {props.label}
      <InputGroup
        disabled={!props.habilitado}
        form={props.form}
        name={props.nome}
        value={valorLocal ? String(valorLocal) : ''}
        onChange={(e: any) => setValor(e)}
        placeholder={props.placeHolder}
      />
    </Label>
  );
};
