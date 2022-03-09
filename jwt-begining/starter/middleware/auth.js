const JWT = require("jsonwebtoken");
const error = require("../errors");
const authentication = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log(authHeader);
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new error.UnAuthorizeError("credentials missing");
    }
    const token = authHeader.split(" ")[1].trim();
    try {
        console.log(token);
        decoded = JWT.verify(token, process.env.JWT_SECRET);
        console.log(decoded);
        req.decoded = decoded;
        next();
    } catch (e) {
        throw new error.BadRequestError("invalid Credentials");
    }
};

module.exports = authentication;
