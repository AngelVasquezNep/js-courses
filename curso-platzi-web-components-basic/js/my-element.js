class MyElement extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    // Which attr do you want to observe
    return ["title", "content", "img"];
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    if (oldVal !== newVal) {
      this[attr] = newVal;
    }
  }

  getTemplate() {
    const template = document.createElement("template");

    template.innerHTML = `
      <section>
        <h2>
          <slot name="title"></slot>
        </h2>
        <p>${this.content}</p>
      </section>
      ${this.getStyles()}
    `;

    return template;
  }

  getStyles() {
    return `
    <style>
      :host {
        --my-element-primary-color: aqua;

        display: grid;
        border: 1px solid var(--my-element-primary-color);
      }
    </style>
    `;
  }

  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("my-element", MyElement);
