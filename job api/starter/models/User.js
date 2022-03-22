const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userSchema = mongoose.Schema({
    name: {
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
        unique: true,
    },

    password: {
        type: String,
        required: [true, "password must be inserted"],
    },
});
userSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});
userSchema.methods.createToken = function () {
    return jwt.sign({ name: this.name, id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_LIFETIME,
    });
};

userSchema.methods.passwordVerify = function (password) {
    return bcrypt.compare(password, this.password);
};
module.exports = mongoose.model("user", userSchema);
