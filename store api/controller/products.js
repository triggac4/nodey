const productModel = require("../models/product");
const ProductError = require("../error/productError");

//const queryChecker(queries)

const getAllProducts = async (req, res) => {
    const { featured, company, name, sort } = req.query;
    let sorts = "createdAt";
    const searchQuery = {};
    let result = [];

    if (featured) {
        searchQuery.featured = featured === "true" ? true : false;
    }
    if (company) {
        searchQuery.company = company;
    }
    if (name) {
        console.log(name);
        searchQuery.name = { $regex: name, $options: "i" };
    }
    if (sort) {
        sorts = sort.replaceAll(",", " ");
    }

    result = await productModel.find(searchQuery).sort(sorts).exec();

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
