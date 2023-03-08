const express = require('express');

const router = express.Router();

const Question = require('../models/question');

// Sample question objects

// 6408086c4034d9fdceff0d4a
//    "order": 1,
//    "text": "Test Text",
//    "options": ["Eat Food", "Play Video Games", "Go Outside"],
//    "optionWeights": [
//        {
//            "Eat Food": 1
//        },
//        {
//            "Play Video Games": 2
//        },
//        {
//            "Go Outside": 3
//        }
//    ]


// Get all Question objects
router.get('/', async (req, res) => {

    // --- YOUR CODE GOES UNDER THIS LINE --- 

    // --------- DELETE THIS CONTENT --------
    res.send({
        message: "Hello World"
    })
    // -------------------------------------
});

// Get a specific Question object
router.get('/:questionId', async (req, res) => {

    // --- YOUR CODE GOES UNDER THIS LINE --- 

    // --------- DELETE THIS CONTENT --------
    res.send({
        message: "Hello World"
    })
    // -------------------------------------
});

// Create a new Question object
router.post('/', async (req, res) => {

    // --- YOUR CODE GOES UNDER THIS LINE --- 

    // --------- DELETE THIS CONTENT --------
    res.send({
        message: "Hello World"
    })
    // -------------------------------------

});

// Update a specific Question object
router.patch('/:questionId', async (req, res) => {

    // --- YOUR CODE GOES UNDER THIS LINE --- 

    // --------- DELETE THIS CONTENT --------
    res.send({
        message: "Hello World"
    })
    // -------------------------------------
});

// Delete a specific Question object
router.delete('/:questionId', async (req, res) => {

    // --- YOUR CODE GOES UNDER THIS LINE --- 

    // --------- DELETE THIS CONTENT --------
    res.send({
        message: "Hello World"
    })
    // -------------------------------------
});

module.exports = router;

