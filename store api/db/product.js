const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    company: { type: String, required: true },
    rating: { type: Number, default: 5 },
});

const product = mongoose.model("products", productSchema);

module.exports = product;
