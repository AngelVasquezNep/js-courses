/**
 * Recreate redux
 */

const createStore = (reducer, initialState) => {
  let state = initialState;
  const listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);

    listeners.forEach((listener) => listener(state));
  };

  const subscribe = (listener) => listeners.push(listener);

  return {
    getState,
    dispatch,
    subscribe,
  };
};

const reducer = (state, { type, message }) => {
  switch (type) {
    case "NEW_MESSAGE":
      return {
        ...state,
        message,
      };

    default:
      return state;
  }
};

const store = createStore(reducer, { message: "Initial message" });

store.subscribe((newState) => console.log("New State", newState));
store.dispatch({
  type: "NEW_MESSAGE",
  message: "Dispatched message",
});
