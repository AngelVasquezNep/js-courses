class UpDownElement extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    console.log("MOUNT");
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    console.log("Values changes");
  }

  disconnectedCallback() {
    console.log("UNMOUNT");
  }
}

customElements.define("up-down-element", UpDownElement);

const myElement = document.createElement("up-down-element");

console.log(myElement);

document.body.appendChild(myElement);

myElement.remove();
