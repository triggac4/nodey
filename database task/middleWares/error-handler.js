const CustomError = require("../error/customError");

const errorHandler = (err, req, res, next) => {
    if (err instanceof CustomError) {
        res.status(err.statusCode).json({ msg: err.message });
    } else res.status(500).json({ msg: err.message });
    next();
};

module.exports = errorHandler;
