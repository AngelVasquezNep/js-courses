import { Component, createElement } from "../lib/react/index.js";

import Wrapper from "./Wrapper.js";
import User from "./User.js";
// import UserStyled from "./UserStyled.js";

class App extends Component {
  render() {
    // const AshStyled = new UserStyled({
    //   avatar: "./images/ash.jpg",
    //   name: "Ash",
    // }).render();

    const Ash = new User({ avatar: "./images/ash.jpg", name: "Ash" }).render();

    return new Wrapper({ children: [Ash] }).render();
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
