'use strict'

var express = require('express');

var ProjectController = require('../controllers/project');

var router = express.Router();
router.get('/home', ProjectController.home);
router.post('/test', ProjectController.test);
router.post('/project', ProjectController.saveProject);
router.get('/project', ProjectController.getProjects);
router.get('/project/:id', ProjectController.getProject);
router.put('/project/:id', ProjectController.updateProject);
router.delete('/project/:id', ProjectController.deleteProject);


module.exports = router;