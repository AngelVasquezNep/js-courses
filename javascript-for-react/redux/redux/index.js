/**
 * Recreate redux
 */

const createStore = (reducer, initialState) => {
  let state = initialState;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);

    listeners.forEach((listener) => listener(state));
  };

  const subscribe = (listener) => listeners.push(listener);
  const unsubscribe = (listener) => {
    const listenerIndex = listener.indexOf(listener);

    if (index !== -1) {
      listener = listeners.filter((listener, index) => index !== listenerIndex);
    }
  };

  return {
    getState,
    dispatch,
    subscribe,
    unsubscribe,
  };
};

export { createStore };
