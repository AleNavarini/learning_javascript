'use strict'
var Project = require('../models/project');
var controller = {
    home: function(req, res){
        return res.status(200).send({
            message: "Home page Ok"
        });
    },
    test: function(req, res){
        return res.status(200).send({
            message: "Test method ok"
        });
    },
    saveProject: function(req, res){
        var project = new Project();
        var params = req.body;

        project.name = params.name;
        project.description = params.description;
        project.repository = params.repository;
        project.tech = params.tech;

        project.save((err, projectStored) => {
            if (err){
                return res.status(500).send({ message: "Error saving new Project"});
            }
            if(!projectStored){
                return res.status(404).send({message: "Could not save project"});
            }
            return res.status(200).send({
                project:project,
                message: "Project saved succesfully"
            });
        });

      
    },

    getProject: function (req, res) {
        var projectId = req.params.id;

        var project = Project.findById(projectId, (err, project) =>{
            if (err){
                return res.status(500).send({ message: "Error finding the Project"});
            }
            if(!project){
                return res.status(404).send({message: "Project does not exist"});
            }
            return res.status(200).send({
                project:project,
                message: "Project found succesfully"
            })
        } );
      },
    
    getProjects: function (req, res){
        var projects = Project.find({}).exec((err, projects) => {  // Inside JSon you could stablish conditions
            if (err){                                               // you could use .sort('+/-column') to sort the query result
                return res.status(500).send({ message: "Error finding the Projects"});
            }
            if(!projects){
                return res.status(404).send({message: "Projects don't exist"});
            }

            return res.status(200).send({
                projects:projects,
                message: "Projects found succesfully"
            })
        })
    },
    updateProject: function (req, res) {
        var projectId = req.params.id;
        var update = req.body;

        Project.findByIdAndUpdate(projectId, update,{new:true}, (err, project) =>{ // new true to return the modified object
            if (err){
                return res.status(500).send({ message: "Error updating the Project"});
            }
            if(!project){
                return res.status(404).send({message: "Project does not exist"});
            }
            return res.status(200).send({
                project:project,
                message: "Project updated succesfully"

            });
            

        } );
      },
      deleteProject: function (req, res) {
            var projectId = req.params.id;
            Project.findByIdAndDelete(projectId, (err, project) => {
                if (err){
                    return res.status(500).send({ message: "Error deleting the Project"});
                }
                if(!project){
                    return res.status(404).send({message: "Project does not exist"});
                }
                return res.status(200).send({
                    project: project,
                    message: "Project deleted succesfully"
                });
            })
        },

}

module.exports = controller;