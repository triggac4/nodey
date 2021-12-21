const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: { type: String, required: [true, "name value is incorrect"] },
    price: { type: Number, required: [true, "price value is incorrect"] },
    company: { type: String, required: true },
    rating: { type: Number, default: 5 },
    featured: { type: Boolean, default: false },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    company: {
        type: String,
        enum: {
            values: ["ikea", "liddy", "caressa", "marcos"],
            message: "{VALUE} is not am option",
        },
    },
});

const product = mongoose.model("products", productSchema);

module.exports = product;
