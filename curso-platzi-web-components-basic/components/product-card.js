import styles from "./product-card-styles.js";

class ProductCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["img", "cardtitle", "price", "description", "collection"];
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    console.log(attr, oldValue, newValue)
    if (oldValue !== newValue) {
      this[attr] = newValue;
    }
  }

  getTemplate() {
    const template = document.createElement("template");

    template.innerHTML = `
      <main class="container">
        <section class="imgBox">
          <img src="${this.img}" />
        </section>
        <section class="details">
          <div class="content">
            <h2>${this.cardtitle} <span>${this.collection}</span></h2>
            <p>${this.description}</p>
            <h3>${this.price}</h3>
            <button onclick="${this.onClick}">Comprar</button>
          </div>
        </section>
      </main>

      ${this.getStyles()}
    `;

    return template;
  }

  getStyles() {
    return styles;
  }

  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("product-card", ProductCard);
