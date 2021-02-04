function render(element, container) {
  if (typeof element === "string" || element instanceof Element) {
    return container.append(element);
  }

  element.update = function (newChild) {
    container.replaceChild(newChild, childElement);
    childElement = newChild;
  };

  let childElement = element.render();

  container.append(childElement);
}

export { render };
