import { createStore } from "../lib/redux/index.js";
import reducer from "./reducers/index.js";

const initialState = {
  filter: 'all',
  hashedMapMovies: {},
  lists: {
    search: [],
    popular: [],
    notPopular: [],
    all: [],
  }
};

const store = createStore(reducer, initialState);

export default store;
