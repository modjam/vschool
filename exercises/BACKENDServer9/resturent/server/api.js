var express = require("express");
var mongoose = require("mongoose");
var apiRouter = express.Router();
var Menu = require("./menu.js");


apiRouter.get("/", function(req, res) {
	Menu.find({}, function(err, data) {
		if(err) {
			res.status(500).send({"message": "Error with db", err: err});
		} else {
			res.status(200).send({"message": "Success", data: data});
		}
	})
});

apiRouter.post("/", function (req, res) {
	console.log(req.body);
	var newMenuItem = new Menu(req.body);
	newMenuItem.save(function(err, newMenuItem) {
		if(err) {
			res.status(500).send({"message": "Error with db", err: err});
		} else {
			res.status(200).send({"message": "Success", data: newMenuItem});
		}
	});
});

apiRouter.delete("/:id", function(req, res) {
	Menu.findOne({_id: req.params.id}, function(err, menuItem) {
		if(err) {
			res.status(500).send({"message": "Error with db", err: err});
		} else if (menuItem == undefined) {
			res.status(404).send({"message": "no item with id " + req.params.id});
		} else {
			menuItem.remove(function(err, data) {
				if(err) {
					res.status(500).send({"message": "Error with db", err: err});
				} else {
					res.status(200).send({"message": "item was deleted"});
				}
			});
		}
	})
});

apiRouter.put("/:id", function (req, res) {
	Menu.findOne({_id: req.params.id}, function (err, menuItem) {
		if(err) {
			res.status(500).send({"message": "Error with db", err: err});
		} else if(menuItem == undefined) {
			res.status(404).send({"message": "no item with id " + req.params.id});
		} else {
			for(key in req.query) {
				menuItem[key] = req.query[key];
			}
			menuItem.save(function(err, newItem) {
				if(err) {
					res.status(500).send({"message": "Error with db", err: err});
				} else {
					res.status(200).send({"message": "Success",	data: newItem});
				}
			});
		}
	})
});

module.exports = apiRouter;