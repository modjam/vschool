var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var uuid = require("uuid");
var validate = require("./utils.js");
var PORT = process.env.PORT || 8080;
var bounty = require("./bounty.js");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.get("/bounty", function(req, res) {
	res.status(200).send(bounty);
})
app.post("/bounty", function (req, res) {

	var data = {
		id: uuid.v4(),
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		isAlive: req.body.isAlive,
		bountyAmount: req.body.bountyAmount,
		types: req.body.types,
	}
	var didPass = validate(data);
	if (didPass.pass == false) {
		res.status(400).send({
			"message": didPass.message
		})
	} else {
		bounty.push(data);
		res.status(200).send({
		"message": "success"
	});
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
app.put("/bounty/:id", function (req, res) {
	var id = req.params.id;
	for (var i = 0; i < bounty.length; i++) {
		if (id == bounty[i].id) {
			var data = {
				id: req.params.id,
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				isAlive: req.body.isAlive,
				bountyAmount: req.body.bountyAmount,
				types: req.body.types,
			}
			res.status(200).send({
				"message": "success to update",
				data
			})
			var didPass = validate(data);
			if (didPass.pass == false) {
				res.status(400).send({
					"message": didPass.message
				})
			} else {
				bounty[i] = data;
				res.status(200).send({
					"message": "success"
				});
			}

		}
	}
	res.status(404).send({
		"message": "wrong id"
	})
})
	

app.listen(PORT, function() {
	console.log("listening on " + PORT + " good");
})