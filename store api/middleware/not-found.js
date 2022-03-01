function notFound(req, res) {
    res.status(500).json({ msg: "invalid route or not found" });
}

module.exports = notFound;
