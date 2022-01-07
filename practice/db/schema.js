const mongoose = require("mongoose");

const practiceSchema = mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
    },
});

module.exports = mongoose.model("Practice", practiceSchema);
