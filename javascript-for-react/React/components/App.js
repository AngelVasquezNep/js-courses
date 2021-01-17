import { Component } from "../lib/react/index.js";

import Wrapper from "./Wrapper.js";
import User from "./User.js";

class App extends Component {
  render() {
    const Ash = new User({ avatar: "./images/ash.jpg", name: "Ash" }).render();

    return `
      <div class="app">
        ${new Wrapper({
          children: `
            <h1>React</h1>
            ${Ash}
          `,
        }).render()}
      </div>
    `;
  }
}

export default App;
