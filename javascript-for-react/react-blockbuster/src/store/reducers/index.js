import { ADD_MOVIES, SET_FILTER, SEARCH } from "../actions.js";

import addMovies from './addMovies.js'
import search from './search.js'

const reducer = (state, { type, ...restAction }) => {
  switch (type) {
    case ADD_MOVIES:
      return addMovies(state, restAction)

    case SET_FILTER:
      const { filter } = restAction

      return {
        ...state,
        filter
      };
    
    case SEARCH:
      return search(state, restAction)

    default:
      return state;
  }
};

export default reducer;
