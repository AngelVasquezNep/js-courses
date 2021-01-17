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
  "picture",
];

const component = (tag) => (styles) => (content) =>
  `<${tag} style="${styles}">${content}</${tag}>`;

const styled = {
  img: (styles) => (content) => `
    <img style="${styles}" ${content} />
  `,
};

TAGS.forEach((tag) => (styled[tag] = component(tag)));

export default styled;
