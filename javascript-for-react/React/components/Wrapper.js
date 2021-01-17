import { Component, createElement } from "../lib/react/index.js";

class Wrapper extends Component {
  render() {
    return createElement("div", {
      class: "wrapper",
      children: this.props.children,
    });
  }
}

export default Wrapper;
