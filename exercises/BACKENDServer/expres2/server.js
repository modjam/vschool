var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 8080;
var students = require("./students.js");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.get("/", function(req, res) {
	res.status(200).send(students);
})
app.post("/", function(req, res) {
	students.push(req.body);
	res.status(200).send({"message": "success"});
})

app.listen(PORT, function() {
	console.log("listening on " + PORT + " good");
})