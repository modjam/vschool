var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var menuSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	cost: {
		type: Number,
        required: true
	},
	isFine: {
		type: Boolean,
        required: true
	}
});

module.exports = mongoose.model("Menu", menuSchema);