const express = require('express');
const Question = require('../models/question');
const mongoose = require('mongoose')


const router = express.Router();

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
router.get('/:questionId', async (req, res, next) => {
    const question = req.params.questionId;
    Question.findById(question)
        .then(question => {
            if(!question){
                const error = new Error("Could Not Find Question");
                error.statusCode = 404;
                throw(error)
            }
            res.statusCode(200).json({message: "Question Found!" ,question : question})
        })
        .catch(err => {
            if (!err.statusCode){
                err.statusCode = 500;
            }
            next(err);
        })

});

// Create a new Question object
router.post('/', async (req, res) => {
    const question = new Question({
        order: req.body.order,
        text: req.body.text,
        options: req.body.options,
        weights: req.body.optionWeights
    });

    try {
        const savedQuestion = await question.save();
        res.json(savedQuestion);
    } catch (err) {
        res.json({ message: err });
    }
});

// Update a specific Question object
router.patch('/:questionId', async (req, res, next) => {
    const questionId = req.params.questionId;
    const order = req.body.order;
    const text = req.body.text;
    const options = req.body.options;
    const optionWeights = req.body.optionWeights;

    Question.findById(questionId)
    .then(question => {
        if(!question){
            const error = new Error("Could Not Find Question");
            error.statusCode = 404;
            throw(error)
        }
        question.order = order;
        question.text = text;
        question.options = options;
        question.optionWeights = optionWeights;
        return question.save();
    })
    .then(result => {
        res.statusCode(200).json({message: "Question Has Been Updated", question: result})
    })
    .catch(err => {
        if (!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    })
});

// Delete a specific Question object
router.delete('/:questionId', async (req, res, next) => {
    const questionId = req.params.questionId;
    Question.findById(questionId)
    .then(question => {
        if(!question){
            const error = new Error("Could Not Find Question");
            error.statusCode = 404;
            throw(error)
        }
        return question.findByIdAndRemove(questionId)
    })
    .then(result => {
        res.statusCode(200).json({message: "Deleted Question"})
    })
    .catch(err => {
        if (!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    })
});

module.exports = router;

