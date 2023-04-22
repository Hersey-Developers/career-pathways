const express = require('express');
const router = express.Router();
const Career = require('../models/career');
const career = require('../models/career');

// Sample Career Objects

// {
//     "name": "Software Engineer",
//     "description": "Software developers design computer applications or programs. Software quality assurance analysts and testers identify problems with applications or programs and report defects.",
//     "avgIncome": 111700,
//     "numJobs": 500000,
//     "projectedGrowth": 25,
//     "projectedOpenings": 400000,
//     "sectorId": "STEM",
//     "usNewsLink": "https://money.usnews.com/careers/best-jobs/software-developer"
//     "_id": "6431f81253205a0f166cad5c",
//     "__v": 0
// }


// {
//     "name": "Nurse Practitioner",
//     "description": "Nurse practitioners are registered nurses with additional education. Extra schooling allows these professionals to take patient histories, perform physical exams, order labs, analyze lab results, prescribe medicines, authorize treatments and educate patients and families on continued care.",
//     "avgIncome": 120680,
//     "numJobs": 112700,
//     "projectedGrowth": 15,
//     "projectedOpenings": 200000,
//     "usNewsLink": "https://money.usnews.com/careers/best-jobs/nurse-practitioner",
//     "_id": "6431f84a53205a0f166cad5e",
//     "__v": 0
// }

router.get('/', async (req, res) => {
   try {
        const career = await Career.find();
        res.json(career);
    } catch (err) {
        res.json({ message: err });
    }
});

router.get('/:careerId', async (req, res) => {
    const career = req.params.careerId;
    Career.findById(career)
        .then(career => {
            if(!career){
                const error = new Error("Could Not Find Career");
                error.statusCode = 404;
                throw(error)
            }
            res.statusCode(200).json({message: "Career Found!", career: career})
        })
        .catch(err => {
            if (!err.statusCode){
                err.statusCode = 500;
            }
            next(err);
        })
});

router.post('/', async (req, res) => {
    // Create a new Career object

    // --- YOUR CODE GOES UNDER THIS LINE ---

    const newCareer = new Career({
        name: req.body.name,
        description: req.body.description,
        avgIncome: req.body.avgIncome,
        numJobs: req.body.numJobs,
        projectedGrowth: req.body.projectedGrowth,
        projectedOpenings: req.body.projectedOpenings,
        sectorId: req.body.sectorId,
        usNewsLink: req.body.usNewsLink
    })
    newCareer
        .save()
        .then(result => {
            res.status(201).json({career: result})

        })
        .catch(err => {
            console.log(err)
        })
})

router.patch('/:careerId', async (req, res) => {
    const name = req.body.name
    const description = req.body.description
    const avgIncome = req.body.avgIncome
    const numJobs = req.body.numJobs
    const projectedGrowth = req.body.projectedGrowth
    const projectedOpenings = req.body.projectedOpenings
    const sectorId = req.body.sectorId
    const usNewsLink = req.body.usNewsLink
    const careerId = req.params.careerId

    Career.findById(careerId)
    .then(career => {
        if(!career){
            const error = new Error("Could Not Find Career");
            error.statusCode = 404;
            throw(error)
        }
        career.name = name;
        career.description = description;
        career.avgIncome = avgIncome;
        career.numJobs = numJobs;
        career.projectedGrowth = projectedGrowth;
        career.projectedOpenings = projectedOpenings;
        career.sectorId = sectorId;
        career.usNewsLink = usNewsLink;
        return career.save();
    })
    .then(result => {
        res.statusCode(200).json({message: "Career Has Been Updated", career: result})
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
    const careerId = req.params.careerId;
    Career.findById(careerId)
    .then(career => {
        if(!career){
            const error = new Error("Could Not Find Career");
            error.statusCode = 404;
            throw(error)
        }
        return career.findByIdAndRemove(careerId)
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