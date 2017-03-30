var express = require("express");
var jwt = require("jsonwebtoken");
var authRouter = express.Router();
var User = require("../models/user.js");
var config = require("../config.js");

authRouter.post("/signup", function (req, res) {
	User.find({username: req.body.username}, function (err, data) {
		if (err) {
			res.status(500).send(err);
		} else if (data.length > 0) {
			res.status(400).send({"message": "username is taken"});
		} else {
			var newUser = new User(req.body);
			newUser.save(function (err, data) {
				if (err) {
					res.status(500).send(err);
				} else {
					res.status(200).send({"message": "user is made"});
				}
			});
		}
	})
});

authRouter.post("/signin", function (req, res) {
	User.findOne({username: req.body.username}, function (err, user) {
		if (err) {
			res.status(500).send(err);
		} else if (user == undefined) {
			res.status(404).send({"message": "username not exists"});
		} else if(user.password != req.body.password) {
			res.status(404).send({"message": "password incorrect"});
		} else {
			//generate token makes xxxxx.yyyyy.zzzzz
			var token = jwt.sign(user.toObject(), config.secret, {expiresIn: "1h"});
			res.status(200).send({"message": "here your token", token: token});
		}
	})
});

module.exports = authRouter;