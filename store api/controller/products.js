const asyncWrapper = require("../middleware/async-wrapper");
const getAllProduct = asyncWrapper((req, res) => {
    res.json({ msg: "get All product" });
});
const getAllStaticProduct = asyncWrapper((req, res) => {
    throw Error("something went wrong");
    res.json({ msg: "get All static product" });
});

module.exports = { getAllProduct, getAllStaticProduct };
