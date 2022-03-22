const error = require("../errors");
const jwt = require("jsonwebtoken");
const authMiddleware = async (req, res, next) => {
    const { authorization } = req.headers;
    console.log(authorization);
    if (!authorization || !authorization.startsWith("Bearer ")) {
        throw new error.UnauthenticatedError("Not Authorized");
    }
    const token = authorization.split(" ")[1];
    try {
        const user = jwt.verify(token, process.env.JWT_SECRET);
        req.user = user;
        next();
    } catch (e) {
        throw new error.UnauthenticatedError("Not Authorized");
    }
};

module.exports = authMiddleware;
