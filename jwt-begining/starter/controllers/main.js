const login = async (req, res) => {
    res.send("you have been authenticated");
};
const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random(0, 1) * 100);
    res.json({
        msg: `hello John Doe`,
        secret: `your secret code is ${luckyNumber}`,
    });
};

module.exports = { login, dashboard };
