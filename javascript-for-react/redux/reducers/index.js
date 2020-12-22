import uuid from "../utils/uuid.js";
import {
  CHANGE_MESSAGE,
  ADD_NEW_MESSAGE,
  DELETE_MESSAGE,
} from "../actions/index.js";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case CHANGE_MESSAGE:
      return {
        ...state,
        message: payload.message,
      };

    case ADD_NEW_MESSAGE:
      const newMessage = {
        ...payload,
        id: uuid(),
        createdAt: new Date(),
      };

      return {
        ...state,
        messages: [...state.messages, newMessage],
      };

    case DELETE_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter(
          (message) => message.id !== payload.messageId
        ),
      };

    default:
      return state;
  }
};

export default reducer;
