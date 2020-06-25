const express = require("express");
const createBlog = require("../controllers/blogControllers");
//routes
function createBlogRoute(app) {
  console.log("create Blog route");
  const { req, res } = app;
  app.get("/createBlog", createBlog.createBlog(req, res));
}
module.exports = {
  createBlogRoute: createBlogRoute,
};
