var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var imageSchema = new Schema({
  name: String,
  url: String
});

module.exports = mongoose.model("Images", imageSchema);
