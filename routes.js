const express = require("express");

const router = express.Router();

const paginatedResults = require("./controllers/users");
const User = require("./models/user");

router.get("/", paginatedResults(User), (req, res) => {
  res.json(res.paginatedResults);
});

module.exports = router;
