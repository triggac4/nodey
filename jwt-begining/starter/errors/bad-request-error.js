const CustomAPIError = require("./custom-error");
const { StatusCodes } = require("http-status-codes");

class BadRequestError extends CustomAPIError {
    constructor(message, statusCodes = StatusCodes.BAD_REQUEST) {
        super(message, statusCodes);
    }
}

module.exports = BadRequestError;
