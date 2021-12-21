const ProductError = require("../error/productError");
const errorHandler = (err, req, res, next) => {
    if (err instanceof ProductError) {
        return res.status(err.stateCode).json({ msg: err.message });
    }
    console.log(err);
    res.status(500).json({ msg: err.message });
};

module.exports = errorHandler;
