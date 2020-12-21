import { createStore } from "./redux/index.js";
import reducer from "./reducers/index.js";

const INITIAL_STATE = { messages: [] };

const store = createStore(reducer, INITIAL_STATE);

export default store;
