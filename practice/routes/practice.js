const router = require("express").Router();
const practice = require("../db/schema");

const asyncWrapper = require("../middleware/async-wrapper");

router.route("/").post(
    asyncWrapper(async (req, res) => {
        const { name, email } = req.body;
        if (name && email) {
            const data = { name, email };
            await practice.create(data);
            res.json({ success: true, data });
        } else {
            throw new Error("Missing name or email");
        }
    })
);

module.exports = router;
