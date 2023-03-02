const express = require("express");
const { check } = require("express-validator");
const sampleController = require("../../controllers/sample/sample-controller");

const router = express.Router();

router.post(
    "/",
    sampleController.addSample
)

module.exports = router;