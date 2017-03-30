var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Customer = new Schema({
	name: String,
	age: Number,
	isAlive: Boolean
})

module.exports = mongoose.model("staff", Customer);