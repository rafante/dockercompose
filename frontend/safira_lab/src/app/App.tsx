import React from "react";
import Menu from "./menu/Menu";
import store from "../store/Store";
import { Provider } from "react-redux";
import "./app.scss";
import "../../node_modules/normalize.css/normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import { FocusStyleManager } from "@blueprintjs/core";
import MasterDominio from "../components/safira_master_dominio";
import SafiraMainLogo from "../components/safira_main_logo";
import SafiraFooterLogo from "../components/safira_footer_logo";

/**
 * Componente principal da aplicação
 * O Provider é um componente que vai transmitir a todos os componentes filhos, o estado global
 * da aplicação
 */
export default function () {
  FocusStyleManager.onlyShowFocusOnTabs();
  return (
    <Provider store={store}>
      <div className={"flex"}>
        <div className="menulateral">
          <SafiraMainLogo largura={180} />
          <Menu />
          <SafiraFooterLogo largura={180} />
        </div>
        <div className="conteudo">
          <MasterDominio />
        </div>
      </div>
    </Provider>
  );
}
