/**
 * Recreate redux
 */

const createStore = (reducer, initialState) => {
  let state = initialState;
  let prevState = initialState;
  let listeners = [];

  const getState = () => state;
  const getPrevState = () => prevState;

  const dispatch = (action) => {
    prevState = { ...state };
    state = reducer(state, action);

    listeners.forEach((listener) => listener(state, prevState));
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    listener(getState(), getPrevState());
  };

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
