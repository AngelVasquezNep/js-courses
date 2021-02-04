import { Component, createElement } from "../lib/react/index.js";

import Wrapper from "./Wrapper.js";
import User from "./User.js";

class App extends Component {
  render() {
    const Ash = new User({ avatar: "./images/ash.jpg", name: "Ash" });

    const WrapperApp = new Wrapper({ children: [Ash] });

    return createElement('div', {
      class: 'app',
      children: WrapperApp
    })
  }
}

export default App;
