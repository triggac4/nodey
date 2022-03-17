const userModel = require("../models/User");
const bcrypt = require("bcryptjs");
async function register(req, res) {
    const response = await userModel.create({
        ...req.body,
    });

    const token = response.createToken();
    res.json({ name: response.name, token: token });
}
async function login(req, res) {
    res.send("login user");
}

module.exports = { register, login };
