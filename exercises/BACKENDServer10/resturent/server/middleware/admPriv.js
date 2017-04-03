var express= require("express");
var jwt = require('jsonwebtoken');
var config = require('../config.js');
var adminRoute= express.Router();

adminRoute.use("/", function(req,res,next){
  var token = req.get("Authorization").split("Bearer ")[1];
  jwt.verify(token,config.secret,function(err,decoded){
    if(err){
      res.status(500).send({"message":"err"})
    }else if(decoded.privilege == "admin"){
      next();
    }else{
      res.status(403).send({"message":"you are not allowed"});
    }
  })
}) ;

module.exports = adminRoute;