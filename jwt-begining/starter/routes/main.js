const router = require("express").Router();
const { login, dashboard } = require("../controllers/main");
const authMiddleware = require("../middleware/auth");

router.route("/dashboard").get([authMiddleware, dashboard]);
//or
//router.get("/dashboard", [authMiddleware, dashboard]);

router.post("/login", login);

module.exports = router;
