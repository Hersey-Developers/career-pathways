const cors = require("cors");
const express = require("express")
const bodyParser = require("body-parser");

const sampleRoutes = require("./routes/samples/sample-routes");

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.options("*", cors());

app.use("/api/samples", sampleRoutes);

app.use(() => {
    const error = new Error("Could not find this route.");
    error.status = 404;
    throw error;
})

module.exports = app;