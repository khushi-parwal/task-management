const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const Project = require('../models/projects');


router.post('/project', async (req, res) => {
    try {
        const {
            title,
            description,
            clientName,
            startDate,
            status,
            priority
        } = req.body;

        const newProject = new Project({
            title,
            description,
            clientName,
            startDate,
            status,
            priority
        });

        await newProject.save();
        res.status(201).json({ message: 'Project added successfully' });
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

router.get('/projects', async (req, res) => {
    try {
        const projects = await Project.find();
        res.send(projects)
    } catch (error) {
        res.status(500).json({ message: error });
    }
});
     
// router.get('/projects', authMiddleware, async (req, res) => {
//     try {
//         const projects = await Project.find({ user: req.user.id }).sort({ createdAt: -1 });
//         res.json(projects);
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).json({ message: 'Server Error' });
//     }
// });


module.exports = router