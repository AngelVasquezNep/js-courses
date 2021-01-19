import { render } from "../../react-dom/index.js";

function renderChildren(element, children) {
  if (Array.isArray(children)) {
    children.forEach((child) => render(child, element));
    return;
  }

  return render(children, element);
}

function setEvent(element, event, callback) {
  return element.addEventListener(event, callback);
}

function setAttributes(element, attribute, value) {
  // Children
  if (attribute === "children") {
    return renderChildren(element, value);
  }

  // Events
  if (attribute.startsWith("on")) {
    const event = attribute.replace("on", "").toLowerCase();

    return setEvent(element, event, value);
  }

  // All attributes
  element.setAttribute(attribute, value);

  return element;
}

export function createElement(type, props, content) {
  // Create DOM element
  const element = document.createElement(type);

  // Set Content
  if (content) {
    element.textContent = content;
  }

  // Set properties
  if (props) {
    Object.keys(props).forEach((attribute) => {
      setAttributes(element, attribute, props[attribute]);
    });
  }

  return element;
}
