// These are just dummy routes
// Used to show the format of the application.

const express = require('express');
const router = express.Router();

const Dummy = require('../models/dummy');

// Get all Dummy objects
router.get('/', async (req, res) => {
    try {
        const dummies = await Dummy.find();
        res.json(dummies);
    } catch (err) {
        res.json({ message: err });
    }
});

// Get a specific Dummy object
router.get('/:dummyId', async (req, res) => {
    try {
        const dummy = await Dummy.findById(req.params.dummyId);
        res.json(dummy);
    } catch (err) {
        res.json({ message: err });
    }
});

// Create a new Dummy object
router.post('/', async (req, res) => {
    const dummy = new Dummy({
        name: req.body.name,
        age: req.body.age,
        address: req.body.address
    });

    try {
        const savedDummy = await dummy.save();
        res.json(savedDummy);
    } catch (err) {
        res.json({ message: err });
    }
});

// Update a specific Dummy object
router.patch('/:dummyId', async (req, res) => {
    try {
        const dummy = await Dummy.findById(req.params.dummyId);

        if (req.body.name) {
            dummy.name = req.body.name;
        }

        if (req.body.age) {
            dummy.age = req.body.age;
        }

        if (req.body.address) {
            dummy.address = req.body.address;
        }
    } catch (err) {
        res.json({ message: err });
    }
});

// Delete a specific Dummy object
router.delete('/:dummyId', async (req, res) => {
    try {
        const removedDummy = await Dummy.remove({ _id: req.params.dummyId });
        res.json(removedDummy);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;