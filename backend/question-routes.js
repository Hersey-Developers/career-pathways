const express = require('express');
const question = require('../models/question');

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

    try {
        const questions = await Question.find();
        res.json(questions);
    } catch (err) {
        res.json({ message: err });
    }
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
    const question = new Question({
        Qorder: req.body.order,
        Qtext: req.question.text,
        Qoptions: req.body.options,
        Qweights: req.body.optionWeights
    });

    try {
        const savedQuestion = await question.save();
        res.json(savedQuestion);
    } catch (err) {
        res.json({ message: err });
    }
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

