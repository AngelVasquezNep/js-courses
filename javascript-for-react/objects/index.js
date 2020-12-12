/**
 * Work with objects
 * Create a simple dynamic objet
 */

const price = 2000;
const TAX = 0.16;

const mackbook = {
  price,

  get finalPrice() {
    return this.price + this.price * TAX;
  },

  set offer(offer) {
    this.price -= offer;
  },

  *discount(offer) {
    while (true) {
      this.offer = offer;
      yield this.price;
    }
  },
};

const id = setInterval(() => {
  const current = mackbook.discount(100).next().value;

  console.log(current, " | ", mackbook.finalPrice);

  if (current <= 0) {
    clearInterval(id);
  }
}, 1000);

console.log(mackbook.price, " | ", mackbook.finalPrice);

let cat = {
  lives: 9,
  jumps: function () {
    return this.lives--; // It works
  },
  jumpsError: () => {
    return this.lives--; // this.lives is undefined
  },
};
