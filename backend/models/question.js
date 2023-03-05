const mongoose = require("mongoose");

const Question = mongoose.Schema({
    order: Number,
    text: String,
    options: [String],
    optionWeights: [
        {
            String: Number
        }
    ]
});

module.exports = mongoose.model("questions", Question);