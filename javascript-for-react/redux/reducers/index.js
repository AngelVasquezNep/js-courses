import { NEW_MESSAGE } from "../actions/index.js";

const reducer = (state, { type, message }) => {
  switch (type) {
    case NEW_MESSAGE:
      return {
        ...state,
        message,
      };

    default:
      return state;
  }
};

export default reducer;
