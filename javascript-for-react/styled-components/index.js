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

const styled = {
  h1: (styles) => (content) => `
    <h1 style="${styles}">
      ${content}
    </h1>
  `,
};

const props = {
  name: "Angelito",
  message: "Hola",
};

const Title = component`--- ${"message"} --- ${"name"}`(props);

const TitleStyled = styled.h1`
  color: red;
  font-size: 2rem;
`;

render(TitleStyled(Title), window.container);
