const express = require("express");

const router = express.Router();

/**
 * load the service
 */
const { BlogController } = require("../controllers/blog.controller");

router.get("/blogs/:page", async (req, res) => {
  const page = req.params.page;
  const posts = await BlogController.getAllPosts(page);
  return res.json(posts);
});

module.exports = router;
