const userModel = require("../models/User");
const bcrypt = require("bcryptjs");
const { StatusCodes } = require("http-status-codes");
const error = require("../errors");
async function register(req, res) {
    const response = await userModel.create({
        ...req.body,
    });

    const token = response.createToken();
    res.status(StatusCodes.CREATED).json({
        user: { name: response.name },
        token: token,
    });
}
async function login(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
        throw error.BadRequestError("please provide an email and password");
    }

    const user = await userModel.findOne({ email });
    if (!user)
        throw new error.BadRequestError(
            "please provide valid email and password"
        );
    const correctPass = await user.passwordVerify(password);

    if (correctPass) {
        const token = user.createToken();
        res.status(StatusCodes.OK).json({ user: { name: user.name }, token });
    } else
        throw new error.UnauthenticatedError(
            "please provide valid email and password"
        );
}

module.exports = { register, login };
