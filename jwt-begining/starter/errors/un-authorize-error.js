const CustomAPIError = require("./custom-error");
const { StatusCodes } = require("http-status-codes");

class UnAuthorizeError extends CustomAPIError {
    constructor(message, statusCodes = StatusCodes.UNAUTHORIZED) {
        super(message, statusCodes);
    }
}

module.exports = UnAuthorizeError;
