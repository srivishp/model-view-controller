const path = require("path");

const express = require("express");

// Bundles all the exported functions
const adminController = require("../controllers/admin");

const router = express.Router();

// Referencing the functions in the controller
router.get("/products", adminController.getProducts);

router.get("/add-product", adminController.getAddProduct);

router.post("/add-product", adminController.postAddProduct);

module.exports = router;
