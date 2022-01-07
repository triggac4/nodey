const router = require("express").Router();
const practice = require("../db/schema");

router.route("/").post(async (req, res) => {
    const { name, email } = req.body;
    if (name && email) {
        const data = { name, email };
        await practice.create(data);
        res.json({ success: true, data });
    } else {
        res.statusCode(404).json({
            success: false,
            data: "name and email are required",
        });
    }
});

module.exports = router;
