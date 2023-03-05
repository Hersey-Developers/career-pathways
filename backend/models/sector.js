const mongoose = require("mongoose");

const Sector = mongoose.Schema({
    name: String,
    avgIncome: Number,
    projectedGrowth: String,
    usNewsLink: String
});

module.exports = mongoose.model("sectors", Sector);