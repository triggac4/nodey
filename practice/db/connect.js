const mongoose = require("mongoose");

async function connectDb(URI) {
    await mongoose.connect(URI);
}

module.exports = connectDb;
