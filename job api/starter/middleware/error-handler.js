const { CustomAPIError } = require("../errors");
const { StatusCodes } = require("http-status-codes");
const errorHandlerMiddleware = (err, req, res, next) => {
    console.log(err);
    const customError = {
        msg: err.message || "internal sever error",
        status: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    };
    if (err instanceof CustomAPIError) {
        return res.status(customError.status).json({ msg: customError.msg });
    }
    if (err.name) {
        customError.status = StatusCodes.BAD_REQUEST;
    }
    if (err.name && err.name === "CastError") {
        customError.status = StatusCodes.BAD_REQUEST;
        customError.msg = `invalid type : ${err.value}`;
    }
    if (err.name && err.name === "ValidationError") {
        customError.status = StatusCodes.BAD_REQUEST;
    }
    if (err.code && err.code === 11000) {
        customError.msg = `duplicate value error for ${Object.keys(
            err.keyValue
        )} `;
        customError.status = StatusCodes.BAD_REQUEST;
    }
    return res.status(customError.status).json({ err: customError.msg });
};

module.exports = errorHandlerMiddleware;
