var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

var filesRouter = require("./files.js");
var apiRouter = require("./api.js");

//packages to handle html
var ejs = require("ejs");
var path = require("path");

//setup server
var app = express();

app.use(filesRouter);
app.use("./menu", apiRouter);

//setup server to handle jason
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//setup server to host static files
app.use(express.static(path.join(__dirname + "/../public")));
app.set("views", __dirname + "/../public/views");

//setup server to handle html
app.engine("html", ejs.renderFile);
app.set("view engine", "ejs");
	
app.listen(PORT, function() {
	console.log("listening on " + PORT + " good");
})