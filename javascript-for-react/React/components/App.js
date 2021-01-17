import { Component, createElement } from "../lib/react/index.js";

// import Wrapper from "./Wrapper.js";
// import User from "./User.js";
// import UserStyled from "./UserStyled.js";

const element = createElement("h1", { class: "title" }, "Hola mundo");

console.log(element)

class App extends Component {
  render() {
    // const Ash = new User({ avatar: "./images/ash.jpg", name: "Ash" }).render();
    // const AshStyled = new UserStyled({
    //   avatar: "./images/ash.jpg",
    //   name: "Ash",
    // }).render();

    return `
      <div class="app">
        <h1>Hola mundo</h1>
      </div>
    `;
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
