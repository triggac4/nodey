const userModel = require("../models/User");
const bcrypt = require("bcryptjs");
async function register(req, res) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const response = await userModel.create({
        ...req.body,
        password: hashedPassword,
    });
    res.json({ msg: response });
}
async function login(req, res) {
    res.send("login user");
}

module.exports = { register, login };
