var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

//connect to db
mongoose.connect("mongodb://localhost/imagedemo");

//import port
var port = process.env.port || 8080;

//sever setup
var app = express();

//setup JSON requests
app.use(bodyParser.urlencoded({limit: "1gb", extended: true}));
app.use(bodyParser.json({limit: "1gb"}));

//setup public facing files
app.use(express.static(path.join(__dirname + "/../public")));
app.set("views", __dirname + "/../public/views");

//setup view engine
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");

//import routes
var webRouter = require("./routes/web.js");
var uploadRouter = require("./routes/upload.js");

app.use(webRouter);
app.use(uploadRouter);

app.listen(port, function() {
  console.log("Server has started");
})
