var express = require("express");
var bodyParser = require("body-parser");

//decide port for web
var PORT = process.env.PORT || 8080;

//connecting and create DB
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/restaurant");

//import routes
var filesRouter = require("./files.js");
var apiRouter = require("./api.js");

//setup server
var app = express();

//packages to handle html
var ejs = require("ejs");
var path = require("path");

//setup server to handle jason
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//setup server to host static files
app.use(express.static(path.join(__dirname + "\\..\\public")));
app.set("views", __dirname + "\\..\\public\\views");

//setup server to handle html
app.engine("html", ejs.renderFile);
app.set("view engine", "ejs");

app.use(filesRouter);
app.use("/menu", apiRouter);
	
app.listen(PORT, function() {
	console.log("listening on " + PORT + " good");
})