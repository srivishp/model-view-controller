//* Using a class/constructor based function to handle the model

const products = [];

// Adding a Product model
module.exports = class Product {
  constructor(t) {
    this.title = t;
  }
  save() {
    products.push(this);
  }

  static fetchAll() {
    return products;
  }
};
