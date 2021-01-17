import { Component } from "../lib/react/index.js";

class Wrapper extends Component {
  render() {
    return `
      <div class="wrapper">
        ${this.props.children}
      </div>
    `;
  }
}

export default Wrapper;
