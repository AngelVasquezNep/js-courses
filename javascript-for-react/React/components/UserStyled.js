import { Component, createElement } from "../lib/react/index.js";
import styled from "../lib/styled-components/index.js";

const UserStyled = styled.div`
  background-image: linear-gradient(
    to bottom,
    #f9f9f9 0%,
    #f9f9f9 130px,
    rgba(0, 0, 0, 0.15) 130px,
    rgba(0, 0, 0, 0.15) 131px,
    white 131px,
    white 100%
  );
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
    super(props)

    this.state = {
      mode: 'light'
    }
  }

  componentDidMount() {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    console.log(media)
  }

  render() {
    const { name, avatar } = this.props;

    return UserStyled({
      children: [
        UserImageStyled({
          src: avatar
        }),
        createElement('h2', null, name)
      ]
    })
  }
}

export default User;
