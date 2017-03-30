var express = require("express");
var uuid = require("uuid");
var validate = require("./utilsrest.js");
var menu = require("./resturent.js");
var apiRouter = express.Router();

//get using param
apiRouter.get("/:id", function(req, res) {
    for(var i = 0; i < menu.length; i++) {
        if(menu[i].id == req.params.id) {
            res.status(200).send(menu[i]);
        }
    }
	res.status(400).send({"message": "error"});
})

//get using query
apiRouter.get("/", function(req, res) {
	if(Object.keys(req.query).length == 0) {
		res.status(200).send(menu);
	} else {
		var filterData = [];
        for(var i = 0; i < menu.length; i++) {
            var counter = 0;
            for(key in req.query) {
				if(req.query[key] == menu[i][key]) {
                    filterData.push(menu[i]);
                    counter++;
				}
			}
            if(counter == Object.keys(req.query).length) {
                filterData.push(menu[i]);
                counter = 0;
            }
		}
		res.status(200).send(filterData);
	}
})

apiRouter.post("/", function (req, res) {
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
apiRouter.put("/:id", function (req, res) {
	for (var i = 0; i < menu.length; i++) {
		if (menu[i].id == req.params.id) {
			for(key in req.query) {
				if(menu[i][key] == undefined) {
					res.status(404).send({"message": "wrong id" + key})
				} else {
					menu[i][key] = req.query[key];
				}
			}
			res.status(200).send({"message": "success to update", menu: menu[i]});
		}
	}
})

//put using param
apiRouter.put("/:id", function (req, res) {
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

apiRouter.delete("/:id", function(req, res) {
	var id =req.params.id;
	for(var i = 0; i < menu.length; i++) {
		if(id == menu[i].id) {
			menu.splice(i, 1);
			res.status(200).send({"message": "success to delete"})
		}
	}
	res.status(404).send({"message": "wrong id"})
})

module.exports = apiRouter;