function notFound(req, res) {
    res.status(400).json({ msg: "invalid route or not found" });
}

module.exports = notFound;
