const productModel = require("../models/Product");
const error = require("../errors");

const createProduct = async (req, res) => {
  const { name, image, price } = req.body;
  if (name && image && price) {
    const newProduct = await productModel.create(req.body);
    res.json(newProduct);
    return;
  }
  throw error.BadRequestError("invalid properties");
};

const getAllProduct = async (req, res) => {
  const products = await productModel.find({});
  res.json({ products });
};

module.exports = {
  createProduct,
  getAllProduct,
};
