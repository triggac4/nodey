const asyncWrapper = require("../middleware/async-wrapper");
const productSchema = require("../models/product");
const getAllProduct = asyncWrapper(async (req, res) => {
    const { featured, company, name, sort, fields, numericFilter } = req.query;
    const queryObject = {};
    if (featured) {
        queryObject.featured = featured == "true" ? true : false;
    }

    if (company) {
        queryObject.company = company;
    }
    if (name) {
        const nameRegex = new RegExp(`^${name}`, "i");
        queryObject.name = { $regex: nameRegex };
    }
    if (numericFilter) {
        ("price>10,rating<2");
        const signs = {
            ">=": "$gte",
            "<=": "$lte",
            ">": "$gt",
            "<": "$lt",
            "=": "$eq",
        };
        const regex = /(>=|<=|>|<|=)/g;
        const filterChange = numericFilter.replaceAll(
            regex,
            (match) => `-${signs[match]}-`
        );
        const split = filterChange.split(",");
        split.forEach((e) => {
            const [name, operation, value] = e.split("-");
            queryObject[name] = { [operation]: value * 1 };
        });
        console.log(queryObject);
    }

    const result = productSchema.find(queryObject);

    if (sort) {
        const sortList = sort.replaceAll(",", " ");
        result.sort(sortList);
    }
    if (fields) {
        const showFields = fields.replace(",", " ");
        result.select(showFields);
    }
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 10;
    const skip = (page - 1) * limit;

    const products = await result.limit(limit).skip(skip);
    res.json({ products, nHit: products.length });
});
const getAllStaticProduct = asyncWrapper(async (req, res) => {
    res.json({ msg: "get All static product" });
});

module.exports = { getAllProduct, getAllStaticProduct };
