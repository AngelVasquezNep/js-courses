import { Component, createElement } from "../lib/react/index.js";

// import Wrapper from "./Wrapper.js";
// import User from "./User.js";
// import UserStyled from "./UserStyled.js";

class App extends Component {
  render() {
    // const Ash = new User({ avatar: "./images/ash.jpg", name: "Ash" }).render();
    // const AshStyled = new UserStyled({
    //   avatar: "./images/ash.jpg",
    //   name: "Ash",
    // }).render();

    const element = createElement("h1", {
        class: "title",
        children: [
          createElement('p', {}, 'children'),
          createElement('p', {}, 'children'),
        ]
      }, "Hola mundo");

    return element;
  }
}
// ${new Wrapper({
//   children: `
//     <h1>React</h1>
//     ${Ash}
//   `,
// }).render()}

// ${new Wrapper({
//   children: `
//     ${AshStyled}
//   `,
// }).render()}

export default App;
