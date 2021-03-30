import { Component, createElement } from "../lib/react/index.js";
import styled from "../lib/styled-components/index.js";

import theme from './theme.js'

const UserStyled = styled.div`
background-image: linear-gradient(
  to bottom,
  ${({ primaryColor }) => primaryColor} 0%,
  ${({ primaryColor }) => primaryColor} 130px,
  ${({ tertiaryColor }) => tertiaryColor} 130px,
  ${({ tertiaryColor }) => tertiaryColor} 131px,
  ${({ secondaryColor }) => secondaryColor} 131px,
  ${({ secondaryColor}) => secondaryColor} 100%);
  color: ${({ fontColor }) => fontColor};
  text-align: center;
  overflow: hidden;
  padding: 20px;
  font-family: system-ui;
  border-radius: 0.3rem;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  user-select: none;
`;

const UserImageStyled = styled.img`
  max-width: 150px;
  border-radius: 50%;
  border: 5px solid white;
  box-shadow: 0 0 2px black;
`;

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: "light",
    };
  }

  componentDidMount() {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    this.setMode(media);

    media.addEventListener("change", this.setMode);
  }

  setMode = (event) => {
    const mode = event.matches ? "dark" : "light";

    this.setState({ mode });
  };

  render() {
    const { name, avatar } = this.props;
    const colors = theme[this.state.mode]

    return UserStyled({
      ...colors,
      children: [
        UserImageStyled({
          src: avatar,
        }),
        createElement("h2", null, name),
      ]
    });
  }
}

export default User;
