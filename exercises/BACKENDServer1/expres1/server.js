var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var uuid = require("uuid");
var PORT = process.env.PORT || 8080;
var bounty = require("./bounty.js");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.get("/bounty", function(req, res) {
	res.status(200).send(bounty);
})
app.post("/bounty", function(req, res) {
	if(req.body.firstName == undefined || req.body.firstName == "") {
		res.status(400).send({"message": "enter first name"});
	} else if(req.body.lastName == undefined || req.body.lastName == "") {
		res.status(400).send({"message": "enter last name"});
	} else if(req.body.isAlive == undefined || req.body.isAlive == "") {
		res.status(400).send({"message": "enter true or false"});
	} else if(req.body.bountyAmount == undefined || req.body.bountyAmount == "") {
		res.status(400).send({"message": "enter amount"});
	} else if(req.body.types == undefined || req.body.types == "") {
		res.status(400).send({"message": "enter type"});
	} else {
		var data = {
			id: uuid.v4(),
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			isAlive: req.body.isAlive,
			bountyAmount: req.body.bountyAmount,
			types: req.body.types,
		}
		bounty.push(data);
		res.status(200).send({"message": "success"});
	}
})
app.delete("/bounty/:id", function(req, res) {
	var id =req.params.id;
	for(var i = 0; i < bounty.length; i++) {
		if(id == bounty[i].id) {
			bounty.splice(i, 1);
			res.status(200).send({"message": "success to delete"})
		}
	}
	res.status(404).send({"message": "wrong id"})
})

app.listen(PORT, function() {
	console.log("listening on " + PORT + " good");
})