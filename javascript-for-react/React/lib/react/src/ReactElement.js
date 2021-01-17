function setAttributes(element, attribute, value) {

  element.setAttribute(attribute, value)

  return element;
}

export function createElement(type, props = {}, content) {
  // Create DOM element
  const element = document.createElement(type);

  // Set Content
  if (content) {
    element.textContent = content;
  }

  // Set properties
  Object.keys(props).forEach((attribute) => {
    setAttributes(element, attribute, props[attribute]);
  });

  return element;
}
