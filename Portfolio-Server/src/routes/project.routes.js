const express = require("express");

const router = express.Router();

const { ProjectController } = require("../controllers/project.controller");

router.get("/projects", (req, res) => {
  res.json(ProjectController.getAllProjects());
});

router.get("/projects/video/:repoName", (req, res) => {
  res.json(ProjectController.getVideoId(req.params.repoName));
});

module.exports = router;
