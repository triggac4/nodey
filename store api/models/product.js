const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {
        required: [true, "something went wrong in the name field"],
        type: String,
    },
    price: {
        required: [true, "something went wrong in the price field"],
        type: Number,
    },
    featured: {
        default: false,
        type: Boolean,
    },
    featured: {
        default: false,
        type: Boolean,
    },
    rating: {
        default: 4.5,
        type: Number,
    },
    createdAt: {
        default: Date.now(),
        type: Date,
    },
    company: {
        type: String,
        required: [true, "something went wrong in company field"],
        enum: {
            values: ["ikea", "marcos", "liddy", "caressa"],
            message: `{VALUE} is not supported as a company`,
        },
    },
});

module.exports = mongoose.model("productModels", productSchema);
