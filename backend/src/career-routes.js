const express = require('express');
const router = express.Router();
const Career = require('../models/career');

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
    // Get all Career objects

    // --- YOUR CODE GOES UNDER THIS LINE ---

    // --------- DELETE THIS CONTENT --------
    res.send({
        message: "Hello World"
    })
    // -------------------------------------
});

router.get('/:careerId', async (req, res) => {
    // Get an individual Career

    // --- YOUR CODE GOES UNDER THIS LINE ---


    // --------- DELETE THIS CONTENT --------
    res.send({
        message: "Hello World"
    })
    // -------------------------------------
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

    await newCareer.save()

    // --------- DELETE THIS CONTENT --------
    res.send({
        newCareer
    })
    // -------------------------------------
})

router.patch('/:careerId', async (req, res) => {
    // Update a Career object

    // --- YOUR CODE GOES UNDER THIS LINE ---


    // --------- DELETE THIS CONTENT --------
    res.send({
        message: "Hello World"
    })
    // -------------------------------------
})

// Delete a specific Sector object

router.delete('/:sectorId', async (req, res) => {
    // Delete a Career object

    // --- YOUR CODE GOES UNDER THIS LINE ---


    // --------- DELETE THIS CONTENT --------
    res.send({
        message: "Hello World"
    })
    // -------------------------------------
});

module.exports = router;