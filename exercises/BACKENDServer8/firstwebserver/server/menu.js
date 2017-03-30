var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var menuSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	cost: {
		type: Number,
		required: true
	},
	type: {
		type: String,
		required: true
	},
});

module.exports = mongoose.model("Menu", menuSchema);