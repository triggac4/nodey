const CustomError = require("../errors/custom-error");
const JWT = require("jsonwebtoken");

const login = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        throw new CustomError("username or password missing", 400);
    }
    const fakeId = new Date().getTime;
    const token = JWT.sign({ username, id: fakeId }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
    res.json({ msg: "user validated", token });
};
const dashboard = async (req, res) => {
    if (req.decoded) {
        const luckyNumber = Math.floor(Math.random(0, 1) * 100);
        res.json({
            msg: `hello ${decoded.username}`,
            secret: `your secret code is ${luckyNumber}`,
        });
    } else {
        throw new CustomError("missing credentials", 401);
    }
};

module.exports = { login, dashboard };
