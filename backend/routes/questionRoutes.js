const express = require('express');

const mainController =  require('../controllers/main');

const router = express.Router();


//GET by ID
router.get('/questions/:_id', mainController.getById);

module.exports = router();