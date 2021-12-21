const express = require("express");
const { append } = require("express/lib/response");
const router = express.Router();

router.route("/").get((req, res) => {
    res.json({ working: "it's working" });
});

module.exports = router;
