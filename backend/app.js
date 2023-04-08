const cors = require("cors");
const express = require("express")
const bodyParser = require("body-parser");

const dummyRoutes = require("./src/dummy-routes");
const questionRoutes = require("./src/question-routes");
const sectorRoutes = require("./src/sector-routes");
const careerRoutes = require("./src/career-routes");

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.options("*", cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Method', 'GET, POST, PATCH, DELETE')// Add needed methods here
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});

app.use("/dummies", dummyRoutes);
app.use("/questions", questionRoutes);
app.use("/sectors", sectorRoutes);
app.use("/careers", careerRoutes);

app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 404;
    const message = error.message;
    res.status = status;
    res.json({ message: message })
})

app.use(() => {
    const error = new Error("Could not find this route.");
    error.status = 404;
    throw error;
})

module.exports = app;