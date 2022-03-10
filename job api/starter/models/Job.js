const { string } = require("joi");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "username needed to proceed"],
        minLength: 3,
    },
    email: {
        type: String,
        required: [true, "email is needed please insert email"],
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "please provide a valid email",
        ],
    },

    password: {
        type: string,
        required: [true, "password must be inserted"],
    },
});

module.exports = mongoose.Schema("user", userSchema);
