const express = require("express");
const router = express.Router();

const productMW = require("../middleware/middlewares");

const productController = require("../controllers/ProductController")

router.get("/", productController.getAllProducts);
router.get("/findproducts/:filter", productMW.filterProductsValidation, productController.findByValue);
router.post("/new", productMW.newProductValidation, productController.addNewProduct);


module.exports = router;