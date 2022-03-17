const userModel = require("../models/User");
const bcrypt = require("bcryptjs");
async function register(req, res) {
    const response = await userModel.create({
        ...req.body,
    });
    res.json({ msg: response });
}
async function login(req, res) {
    res.send("login user");
}

module.exports = { register, login };
