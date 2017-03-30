var express = require("express");
var bodyParser = require("body-parser");
var jwt = require("jsonwebtoken");
var expressJwt = require("express-jwt");

//import configs
var config = require("./config.js");

//decide port for web
var PORT = process.env.PORT || 8080;

//connecting and create DB
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/" + config.database);

//setup server
var app = express();

//setup server to handle jason
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//import routes
var filesRouter = require("./routes/files.js");
var apiRouter = require("./routes/api.js");
var authRouter = require("./routes/auth.js");

//check json token
app.use("/menu", expressJwt({secret: config.secret}));

//packages to handle html
var ejs = require("ejs");
var path = require("path");

//setup server to host static files
app.use(express.static(path.join(__dirname + "\\..\\public")));
app.set("views", __dirname + "\\..\\public\\views");

//setup server to handle html
app.engine("html", ejs.renderFile);
app.set("view engine", "ejs");

app.use(filesRouter);
app.use("/menu", apiRouter);
app.use("/auth", authRouter);
	
app.listen(PORT, function() {
	console.log("listening on " + PORT + " good");
})