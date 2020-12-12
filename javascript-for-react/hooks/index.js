const useState = (initialState) => {
  let state = initialState;

  if (typeof initialState === "function") {
    state = initialState();
  }

  const setState = (newState) => {
    if (typeof newState === "function") {
      state = newState(state);
    } else {
      state = newState;
    }

    return state;
    // Este return seguro no existe en React,
    // seguramente React hace algo por debajo de los hooks
    // que le permite releer state
  };

  return [state, setState];
};

const [state, setState] = useState(1);

console.log("state", state);

setState((state) => state + 1);
setState(10);
