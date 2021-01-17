const TAGS = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "div",
  "p",
  "a",
  "button",
  "strong",
  "small",
  "img",
  "picture",
];

const component = (tag) => (styles) => (content) =>
  `<${tag} style="${styles}">${content}</${tag}>`;

const styled = {
  h1: (styles) => (content) => `
    <h1 style="${styles}">
      ${content}
    </h1>
  `,
};

TAGS.forEach((tag) => (styled[tag] = component(tag)));

export default styled;
