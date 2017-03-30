var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var uuid = require("uuid");
var validate = require("./utilsrest.js");
var PORT = process.env.PORT || 8080;
var menu = require("./resturent.js");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//get all data
app.get("/menu", function(req, res) {
	res.status(200).send(menu);
})

//get using param
app.get("/menu/:id", function(req, res) {
    for(var i = 0; i < menu.length; i++) {
        if(menu[i].id == req.params.id) {
            res.status(200).send(menu[i]);
        }
    }
	res.status(400).send({"message": "error"});
})

//get using query
app.get("/menu", function(req, res) {
	if(Object.keys(req.query).length === 0) {
		res.status(200).send(menu);
	} else {
		var filterData = [];
		for(key in req.query) {
			for(var i = 0; i < menu.length; i++) {
				if(req.query[key] == menu[i][key]) {
					filterData.push(menu[i]);
					console.log(filterData);
				}
			}
		}
		console.log(filterData);
		res.status(200).send(filterData);
	}
})

app.post("/menu", function (req, res) {
	var data = {
		id: uuid.v4(),
		name: req.body.name,
		cost: req.body.cost,
		type: req.body.type
	}
	var didPass = validate(data);
	if (didPass.pass == false) {
		res.status(400).send({
			"message": didPass.message
		})
	} else {
		menu.push(data);
		res.status(200).send({
		"message": "success"
	});
	}
})

//put using query
app.put("/menu/:id", function (req, res) {
	for (var i = 0; i < menu.length; i++) {
		if (menu[i].id == req.params.id) {
			for(key in req.query) {
				if(menu[i][key] == undefined) {
					res.status(404).send({"message": "wrong id" + key})
				} else {
					menu[i][key] = req.query[key];
				}
			}
			res.status(200).send({"message": "success to update", menu: menu})
		}
	}
})

//put using param
app.put("/menu/:id", function (req, res) {
	var id = req.params.id;
	for (var i = 0; i < menu.length; i++) {
		if (id == menu[i].id) {
			var data = {
				id: req.params.id,
				name: req.body.name,
				cost: req.body.cost,
				type: req.body.type
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
				menu[i] = data;
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

app.delete("/menu/:id", function(req, res) {
	var id =req.params.id;
	for(var i = 0; i < menu.length; i++) {
		if(id == menu[i].id) {
			menu.splice(i, 1);
			res.status(200).send({"message": "success to delete"})
		}
	}
	res.status(404).send({"message": "wrong id"})
})
	
app.listen(PORT, function() {
	console.log("listening on " + PORT + " good");
})