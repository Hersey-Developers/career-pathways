const express = require('express');
const sector = require('../models/sector');
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
    try {
        const sector = await Sector.find();
        res.json(sector);
    } catch (err) {
        res.json({ message: err });
    }
});

// Get a specific Sector object
router.get('/:sectorId', async (req, res) => {
    const sector = req.params.sectorId;
    Sector.findById(sector)
        .then(sector => {
            if(!sector){
                const error = new Error("Could Not Find Sector");
                error.statusCode = 404;
                throw(error)
            }
            res.statusCode(200).json({message: "Sector Found!", sector: sector})
        })
        .catch(err => {
            if (!err.statusCode){
                err.statusCode = 500;
            }
            next(err);
        })
});

router.post('/', async (req, res) => {
    const name = req.body.name;
    const avgIncome = req.body.avgIncome;
    const projectedGrowth = req.body.projectedGrowth;
    const usNewsLink = req.body.usNewsLink;
    const sector = new Sector({
        name: name,
        avgIncome: avgIncome, 
        projectedGrowth: projectedGrowth, 
        usNewsLink: usNewsLink
    })
    sector
        .save()
        .then(result => {
            res.status(201).json({sector: result})

        })
        .catch(err => {
            console.log(err)
        })
})

// Update a specific Sector object
router.patch('/:sectorId', async (req, res) => {
    const sectorId = req.params.sectorId;
    const name = req.body.name;
    const avgIncome = req.body.avgIncome;
    const projectedGrowth = req.body.projectedGrowth;
    const usNewsLink = req.body.usNewsLink;

    Sector.findById(sectorId)
    .then(sector => {
        if(!sector){
            const error = new Error("Could Not Find Question");
            error.statusCode = 404;
            throw(error)
        }
        sector.name = name;
        sector.avgIncome = avgIncome;
        sector.projectedGrowth = projectedGrowth;
        sector.usNewsLink = usNewsLink;
        return sector.save();
    })
    .then(result => {
        res.statusCode(200).json({message: "Sector Has Been Updated", sector: result})
    })
    .catch(err => {
        if (!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    })

})

// Delete a specific Sector object

router.delete('/:sectorId', async (req, res) => {
    const sectorId = req.params.sectorId;
    Sector.findById(sectorId)
    .then(sector => {
        if(!sector){
            const error = new Error("Could Not Find Sector");
            error.statusCode = 404;
            throw(error)
        }
        return sector.findByIdAndRemove(sectorId)
    })
    .then(result => {
        res.statusCode(200).json({message: "Deleted Sector"})
    })
    .catch(err => {
        if (!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    })

});

module.exports = router;