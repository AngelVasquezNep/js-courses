function logger({ action, prevState, state }) {
  console.log("PREV STATE", prevState);
  console.log(
    `%cACTION ${action.type}`,
    "color: green; font-weight: bold;",
    action
  );
  console.log("NEXT STATE", state);
}

export default logger;
