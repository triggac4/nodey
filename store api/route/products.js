const express = require("express");
const router = express.Router();

const {
    getAllProducts,
    getAllProductTesting,
} = require("../controller/products");

router.route("/").get(getAllProducts);
router.route("/static").get(getAllProductTesting);

module.exports = router;
