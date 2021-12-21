const productModel = require("../models/product");
const ProductError = require("../error/productError");

//const queryChecker(rqueries)

const getAllProducts = async (req, res) => {
    const searchQuery = req.query ?? {};
    const result = await productModel.find(searchQuery).exec();
    if (result.length <= 0) {
        throw ProductError.create(404, "not found");
    }
    res.status(200).json({ result, length: result.length });
};

const getAllProductTesting = async (req, res) => {
    const result = await productModel.find({ name: "accent chairzz" }).exec();

    if (result.length <= 0) {
        throw ProductError.create(404, "not found");
    }
    res.status(202).json({ result });
};
module.exports = { getAllProducts, getAllProductTesting };
