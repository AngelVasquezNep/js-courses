import store from "./store.js";
import {
  CHANGE_MESSAGE,
  ADD_NEW_MESSAGE,
  DELETE_MESSAGE,
} from "./actions/index.js";

import messageTemplate from "./templates/messageTemplate.js";

window["message-input"].addEventListener("input", ({ target }) => {
  const newMessage = target.value;

  store.dispatch({
    type: CHANGE_MESSAGE,
    payload: { message: newMessage },
  });
});

window["create-message-button"].addEventListener("click", () => {
  store.dispatch({
    type: ADD_NEW_MESSAGE,
    payload: {
      message: store.getState().message,
    },
  });

  window["message-input"].value = "";
});

window["chats"].addEventListener("click", ({ target }) => {
  if (target.className === "message-delelte-button") {
    store.dispatch({
      type: DELETE_MESSAGE,
      payload: { messageId: target.dataset["id"] },
    });
  }
});

function painMessages(newState, prevState) {
  if (newState.messages.length !== prevState.messages.length) {
    window["chats"].innerHTML = newState.messages.map(messageTemplate).join("");
  }
}

function updateChatInfo(newState, prevState) {
  if (newState.messages.length !== prevState.messages.length) {
    window["chat-info"].innerText = `${newState.messages.length} messages`;
  }
}

store.subscribe(updateChatInfo);
store.subscribe(painMessages);
