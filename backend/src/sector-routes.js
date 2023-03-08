const express = require('express');
const router = express.Router();

const Sector = require('../models/sector');

// Sample sector objects

// 64080c106f8047a113d802fa
    // "name": "John Doe",
    // "avgIncome": 100000,
    // "projectedGrowth": "Large",
    // "usNewsLink": "https://google.com",

// Get all Sector objects

router.get('/', async (req, res) => {
    // --- YOUR CODE GOES UNDER THIS LINE ---


    // --------- DELETE THIS CONTENT --------
    res.send({
        message: "Hello World"
    })
    // -------------------------------------
});

// Get a specific Sector object
router.get('/:sectorId', async (req, res) => {
    // --- YOUR CODE GOES UNDER THIS LINE ---


    // --------- DELETE THIS CONTENT --------
    res.send({
        message: "Hello World"
    })
    // -------------------------------------
});

router.post('/', async (req, res) => {
    // --- YOUR CODE GOES UNDER THIS LINE ---


    // --------- DELETE THIS CONTENT --------
    res.send({
        message: "Hello World"
    })
    // -------------------------------------
})

// Update a specific Sector object
router.patch('/:sectorId', async (req, res) => {
    // --- YOUR CODE GOES UNDER THIS LINE ---

    // --------- DELETE THIS CONTENT --------
    res.send({
        message: "Hello World"
    })
    // -------------------------------------
})

// Delete a specific Sector object

router.delete('/:sectorId', async (req, res) => {

    // --- YOUR CODE GOES UNDER THIS LINE ---


    // --------- DELETE THIS CONTENT --------
    res.send({
        message: "Hello World"
    })
    // -------------------------------------

});

module.exports = router;