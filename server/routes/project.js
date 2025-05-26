const express = require('express');
const router = express.Router();

// Replace with your actual MongoDB model
const Project = require('../models/Project'); // You must create this model

// GET /api/projects - fetch all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find({});
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch projects.' });
  }
});

// (Optional) GET /api/projects/:id - fetch a single project by id
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ error: 'Project not found.' });
    res.json(project);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch project.' });
  }
});

// (Optional) POST /api/projects - add a new project
router.post('/', async (req, res) => {
  try {
    const newProject = new Project(req.body);
    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create project.' });
  }
});

// (Optional) PUT /api/projects/:id - update a project
router.put('/:id', async (req, res) => {
  try {
    const updated = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Project not found.' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update project.' });
  }
});

// (Optional) DELETE /api/projects/:id - delete a project
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Project.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Project not found.' });
    res.json({ message: "Project deleted." });
  } catch (err) {
    res.status(400).json({ error: 'Failed to delete project.' });
  }
});

module.exports = router;