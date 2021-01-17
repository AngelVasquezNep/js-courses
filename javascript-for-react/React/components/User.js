import { Component } from "../lib/react/index.js";

class User extends Component {
  render() {
    const { name, avatar } = this.props;

    return `
      <div class="user">
        <div class="avatar">
          <img src="${avatar}" alt="${name}"
        </div>

        <h2>${name}</h2>
      </div>
    `;
  }
}

export default User;
