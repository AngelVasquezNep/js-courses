function render(element, container) {
  if (typeof element === "string" || element instanceof Element) {
    return container.append(element);
  }

  element.update = function (newChild) {
    container.replaceChild(newChild, childElement);
    childElement = newChild;
  };

  let childElement = element.buildComponent();

  container.append(childElement);

  element.componentDidMount()
}

export { render };
