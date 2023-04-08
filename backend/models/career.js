const mongoose = require("mongoose");

const Career = mongoose.Schema({
    name: String,
    description: String,
    avgIncome: Number,
    numJobs: Number,
    projectedGrowth: Number,
    projectedOpenings: Number,
    sectorName: String,
    usNewsLink: String
});

module.exports = mongoose.model("careers", Career);