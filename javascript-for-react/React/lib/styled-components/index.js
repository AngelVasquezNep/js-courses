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
];

const styled = {};

const component = (tag) => (styles) => (props, content) =>
  createElement(
    tag,
    {
      style: styles,
      ...props,
    },
    content
  );

TAGS.forEach((tag) => (styled[tag] = component(tag)));

export default styled;
