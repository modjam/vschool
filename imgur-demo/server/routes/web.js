var express = require("express");
var webRouter = express.Router();

webRouter.get("/", function(req, res) {
  res.render("index.html");
});

module.exports = webRouter;
