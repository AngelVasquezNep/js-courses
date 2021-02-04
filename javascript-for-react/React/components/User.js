import { Component, createElement } from "../lib/react/index.js";

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentWillMount() {
    console.log("A punto de montarse")
  }

  componentDidMount() {
    console.log("Se montó")
  }

  componentDidUpdate() {
    console.log("Se actualizó")
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 })
  };

  render() {
    const { count } = this.state; 
    const { name, avatar } = this.props;

    return createElement("div", {
      class: "user",
      children: [
        createElement("div", {
          class: "avatar",
          onClick: this.handleClick,
          children: createElement("img", { src: avatar }),
        }),

        createElement("h2", null, `${name} ${count}`),
      ],
    });
  }
}

export default User;
