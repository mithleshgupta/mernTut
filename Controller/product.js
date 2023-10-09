const fs = require("fs");
const model = require("../Model/product");
const { default: mongoose } = require("mongoose");
const Product = model.Product;
exports.createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);

    const savedProduct = await product.save();

    console.log(savedProduct);
    res.status(201).json(req.body);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getProduct = async (req, res) => {
  const id = req.params.id;

  const product = await Product.findById(id);
  res.json(product);
};
exports.getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};
exports.putProducts = async (req, res) => {
  const id = req.params.id;
  const doc = await Product.findOneAndReplace({ _id: id }, req.body, {
    new: true,
  });
  res.status(201).json(doc);
};

exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findOneAndDelete({ _id: id });
    res.status(200).json(product);
  } catch {
    console.log(err);
    res.status(404).json(err);
  }
};

exports.patchProduct = (req, res) => {
  const id = +req.params.id;

  const product = products[productIndex];
  products.splice(productIndex, 1, { ...product, ...req.body });
  res.status(201).json();
};
