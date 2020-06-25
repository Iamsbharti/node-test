const express = require("express");
function createBlog(req, res) {
  console.log("create blog controller", res);
  res.send("create blog");
}

module.exports = {
  createBlog: createBlog,
};
