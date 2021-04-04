import { Component } from "../../../React/lib/react/index.js";
import styled from "../../../React/lib/styled-components/index.js";

import Wrapper from "./Wrapper.js";

const HeaderStyled = styled.header`
  background: #0e3fa9;
  margin-bottom: 2em;
  text-align: center;
`;

const HeaderLogoStyled = styled.img`
  width: 200px;
  position: relative;
  top: 20px;
  filter: drop-shadow(3px 3px 0 #f2a30c);
`;

class Header extends Component {
  render() {
    return HeaderStyled({
      children: Wrapper({
        children: HeaderLogoStyled({ src: "./images/logo.png", alt: "Logo" }),
      }),
    });
  }
}

export default Header;
