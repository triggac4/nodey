const JWT = require("jsonwebtoken");
const CustomError = require("../errors/custom-error");
const authentication = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log(authHeader);
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new CustomError("credentials missing", 401);
    }
    const token = authHeader.split(" ")[1].trim();
    try {
        console.log(token);
        decoded = JWT.verify(token, process.env.JWT_SECRET);
        console.log(decoded);
        req.decoded = decoded;
        next();
    } catch (e) {
        throw new CustomError("invalid Credentials", 401);
    }
};

module.exports = authentication;
