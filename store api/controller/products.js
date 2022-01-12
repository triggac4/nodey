const productModel = require("../models/product");
const ProductError = require("../error/productError");

//const queryChecker(queries)

const getAllProducts = async (req, res) => {
    const { featured, company, name, sort, field, price } = req.query;
    let sorts = "createdAt";
    let fields = "";
    const searchQuery = {};
    let result = [];
    // main searchQueries
    if (featured) {
        searchQuery.featured = featured === "true" ? true : false;
    }
    if (company) {
        searchQuery.company = company;
    }
    if (name) {
        searchQuery.name = { $regex: name, $options: "i" };
    }
    if (price) {
        searchQuery.price = { $gt: 30 };
    }
    const productCall = productModel.find({ searchQuery });
    //sort
    if (sort) {
        sorts = sort.replaceAll(",", " ");
        productCall.sort(sorts);
    }

    if (field) {
        fields = field.replaceAll(",", " ");
        productCall.select(fields);
    }

    if (req.query.page) {
        let pageNumber = Number(req.query.page) || 1;
        let limit = Number(req.query.limit) || 10;
        let skip = (pageNumber - 1) * limit;
        productCall.skip(skip).limit(limit);
    }

    result = await productCall;
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
