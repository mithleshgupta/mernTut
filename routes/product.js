const express = require("express");
const productController = require("../Controller/product");
const router = express.Router();

router
  .get("/:id", productController.getProduct)
  .get("/", productController.getProducts)
  .post("/", productController.createProduct)
  .put("/:id", productController.putProducts)
  .delete("/:id", productController.deleteProduct)
  .patch("/:id", productController.patchProduct);

exports.router = router;
