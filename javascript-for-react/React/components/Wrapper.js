import { Component } from "../lib/react/src/React.js";

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
