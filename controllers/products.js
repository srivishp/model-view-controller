//* MODEL VIEW CONTROLLER (MVC)
// # Models handle the business logic that is required (saving, fetching data etc)
// ? Views are what the users see
// -> Controllers are the middleware functions that 'route' data between Models & Views

const Product = require("../models/product");

// GET Product
exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

// POST new product
exports.postAddProduct = (req, res, next) => {
  console.log("Title:", req.body.title);
  // Using the constructor
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

// Render page with products
exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll();
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
};
