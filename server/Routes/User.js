const express = require("express");
const router = express.Router();
const User = require("../Models/User.Model");
router.use(express.json());

router.get("/", async (req, res) => {
  res.json({ msg: "You are in User Route" });
});

module.exports = router;
