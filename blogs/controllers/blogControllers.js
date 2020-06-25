const express = require("express");
exports.createBlog = function (req, res) {
  res.send("create blog");
};
exports.getBlogById = function (req, res) {
  res.send("get blog by id");
};
