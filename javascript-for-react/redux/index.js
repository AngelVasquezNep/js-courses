import store from "./store.js";
import { NEW_MESSAGE } from "./actions/index.js";

store.subscribe((newState) => console.log("New State", newState));

store.dispatch({
  type: NEW_MESSAGE,
  message: "Dispatched message",
});

console.log("Hello");
