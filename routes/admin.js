const path = require("path");

const express = require("express");

// Bundles all the exported functions
const productsController = require("../controllers/products");

const router = express.Router();

// Referencing the functions in the controller
router.get("/add-product", productsController.getAddProduct);

router.post("/add-product", productsController.postAddProduct);

module.exports = router;
