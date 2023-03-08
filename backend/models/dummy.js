// This is a dummy type. You may use it for testing purposes. 

const mongoose = require("mongoose");

const Dummy = mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    address: { type: String, required: true }
});

module.exports = mongoose.model("dummies", Dummy);