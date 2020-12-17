import styled from './styled.js'

function render(component, container) {
  container.innerHTML = component;
}

const component = (strings, ...dynamicValues) => (props) => {
  let newContent = [...strings];

  dynamicValues.forEach((value, index) => {
    newContent[index] += props[value];
  });

  return newContent.join("");
};

const props = {
  name: "Angelito",
  message: "Hola",
};

const Title = component`--- ${"message"} --- ${"name"}`(props);

const TitleStyled = styled.a`
  color: red;
  font-size: 2rem;
`;

render(TitleStyled(Title), window.container);
