const Route = require("express").Router();

const productController = require("../controllers/productController");
const uploadController = require("../controllers/uploadsController");

Route.route("/")
  .post(productController.createProduct)
  .get(productController.getAllProduct);
Route.route("/upload").post(uploadController.uploadProduct);


module.exports=Route;