const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "An user must have an username"]
    },
    password: {
        type: String,
        required: [true, "An user must have a password"]
    },
});

const User = mongoose.model("User", userSchema, "users");

exports.createUser = function(user) {
    return User.create(user)
}

exports.findByUsername = function(username) {
    return User.findOne({ username: username })
}