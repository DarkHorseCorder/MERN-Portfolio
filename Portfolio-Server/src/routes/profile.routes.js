const express = require("express");

const router = express.Router();

const { ProfileController } = require("../controllers/profile.controller");

router.get("/:profileName", (req, res) => {
  res.json({
    profileLink: ProfileController.getProfile(req.params.profileName),
  });
});

module.exports = router;
