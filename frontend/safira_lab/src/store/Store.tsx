import { createStore } from "redux";
import reducersCombinados from "./Reducers";

/**
 * A Store guard a o estado global da aplicação
 */
const store = createStore(reducersCombinados);

export default store;
