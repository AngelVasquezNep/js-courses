import { component } from "../react/index.js";
import styled from "../styled.js";

const props = {
  name: "Angelito",
  message: "Hola",
};

const Title = component`--- ${"message"} --- ${"name"}`(props);

const TitleStyled = styled.a`
  color: red;
  font-size: 2rem;
`;

export default TitleStyled(Title);
