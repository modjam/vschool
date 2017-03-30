var express = require("express");
var mongoose = require("mongoose");
var apiRouter = express.Router();
var Issue = require("../models/issues.js");


apiRouter.get("/", function(req, res) {
	Issue.find({}, function(err, data) {
		if(err) {
			res.status(500).send({"message": "Error with db", err: err});
		} else {
			res.status(200).send({"message": "Success", data: data});
		}
	})
});

apiRouter.post("/", function (req, res) {
	var newIssue = new Issue(req.body);
	newIssue.save(function(err, data) {
		if(err) {
			res.status(500).send({"message": "Error with db", err: err});
		} else {
			res.status(200).send({"message": "Success", data: data});
		}
	});
});

apiRouter.delete("/:id", function(req, res) {
	if(req.query.index >=0) {
		Issue.findById(req.params.id, function(err, data) {
			if(err) {
				res.status(500).send({"message": "Error with db", err: err});
			} else if (data == undefined) {
				res.status(404).send({"message": "no item with id " + req.params.id});
			} else {
				data.comments.splice(req.query.index, 1); data.save(function(err, data) {
					if(err) {
						res.status(500).send({"message": "Error with db", err: err});
					} else {
						res.status(200).send({"message": "a comment was deleted"});
					}
				});
			}
		})
	} else {
		Issue.findById(req.params.id, function(err, data) {
            if(err){
                res.status(500).send(err);
            } else if(data == undefined) {
                res.status(404).send({message: "no item with id " + req.params.id});
            } else {
                data.remove(function(err, data) {
                    if(err) {
                        res.status(500).send({"message": "Error with db", err: err});
                    } else {
                        res.status(200).send({message: "item deleted"});
                    }
                });
            }
        }) 
    }
});

apiRouter.put("/:id", function (req, res) {
	Issue.findById(req.params.id, function (err, data) {
		if(err) {
			res.status(500).send({"message": "Error with db", err: err});
		} else {
			for(key in req.query) {
                if(key !== "comments") {
                    data[key] = req.query[key];
                }
			}
            if(req.query.comments && req.query.comments !== undefined && req.query.comments !== "") {
                data.comments.push(req.query.comments);
            }
			data.save(function(err, data) {
				if(err) {
					res.status(500).send({"message": "Error with db", err: err});
				} else {
					res.status(200).send({"message": "Success",	data: data});
				}
			});
		}
	})
});

module.exports = apiRouter;