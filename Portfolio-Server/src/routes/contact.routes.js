const express = require("express");

const router = express.Router();
const { ContactController } = require("../controllers/contact.controller");

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;
  const { success } = await ContactController.sendEmail({
    name,
    email,
    message,
  });
  res.json({ success });
});

module.exports = router;
