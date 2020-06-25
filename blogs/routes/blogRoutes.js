const express = require("express");
const router = express.Router();

//routes
const blogController = require("../controllers/blogControllers");
router.get("/createBlog", blogController.createBlog);

module.exports = router;
