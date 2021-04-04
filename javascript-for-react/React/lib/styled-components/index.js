import { createElement } from "../react/index.js";

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
  "img",
  "header",
  "form",
  "input",
  "select",
  "section",
];

function buildStyles(styles, builders, props) {
  let newStyles = "";

  for (let index in styles) {
    const builder = builders[index];

    const newStyle = builder ? builder(props) : "";

    newStyles += `${styles[index]}${newStyle}`;
  }

  return newStyles;
}

const styled = {};

const component = (tag) => (styles, ...builders) => (props, content) =>
  createElement(
    tag,
    {
      style: buildStyles(styles, builders, props),
      ...props,
    },
    content
  );

TAGS.forEach((tag) => (styled[tag] = component(tag)));

export default styled;
