var express = require("express");
var uploadRouter = express.Router();

//handle file uploads
var multer = require("multer");
var fs = require("fs");
var path = require("path");

//imgur upload
var imgur = require("imgur-node-api");

//import model
var Image = require("../models/image.js");

//setup imgur settings must sign up on imgur to use
var CLIENT_ID = "53abadb8f120f92";
var CLIENT_SECRET = "b9fa48f7ff034a44cf546ca56998598f743a466a";

//start imgur connection
imgur.setClientID(CLIENT_ID);

//setup que for files
var removeQue = [];

//setup storage on system settings
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/")
  },
  filename: function (req, file, cb) {
    var datetimestamp = Date.now();
    removeQue.push(file.fieldname + "-" + datetimestamp + "." + file.originalname.split(".")[file.originalname.split(".").length -1])
    cb(null, file.fieldname + "-" + datetimestamp + "." + file.originalname.split(".")[file.originalname.split(".").length -1]);
  }
});

//uploader function for a file
var upload = multer({
  storage: storage //storage settings
}).single("file");

//remove specific file from que and upload it to imgur
var uploadToImgurAndRemove = function(files, index) {
  imgur.upload(path.join(__dirname, "/../../public/uploads/" + files[index]), function (err, res) {
    if(err) {
      console.log(err);
    } else {
      var newImage = new Image({
        name: files[index],
        url: res.data.link
      });
      newImage.save(function(err, data) {
        if(err) {
          console.log(err);
        } else {
          //remove file
          fs.unlinkSync(path.join(__dirname, "/../../public/uploads/" + files[index]));
          console.log("File was saved");
        }
      })
    }
  });
}

//Remove files from que in upload
var uploadQue = function(files) {
  for(var i = 0; i < files.length; i++) {
    uploadToImgurAndRemove(files, i);
  };
};

//Actual end point for post
uploadRouter.post("/image", function(req, res) {
  //call the upload function you have made
  upload(req , res, function(err) {
    if(err) {
      res.status(502).send({error_code:1,err_desc:err});
    } else {
      //start que to upload and remove files
      uploadQue(removeQue);
      res.status(200).send({message: "Image has been uploaded"});
    }
  });
});

//End point to get all images
uploadRouter.get("/image", function(req, res) {
  Image.find({}, function(err, data) {
    if(err) {
      res.status(502).send({error_code:1,err_desc:err});
    } else {
      res.status(200).send(data);
    }
  });
});

module.exports = uploadRouter;
