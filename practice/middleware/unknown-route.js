function unknownRoute(req, res) {
    res.status(404).send({ error: "unknown route" });
}
module.exports = unknownRoute;
