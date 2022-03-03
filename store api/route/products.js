const {
    getAllProduct,
    getAllStaticProduct,
} = require("../controller/products");
const router = require("express").Router();

router.route("/").get(getAllProduct);
router.route("/static").get(getAllStaticProduct);

module.exports = router;
