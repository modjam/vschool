var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var issueSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	upvote: {
		type: Number,
		required: true
	},
    downvote: {
		type: Number,
		required: true
	},
    totalvote: {
		type: Number,
		required: true
	},
    comments: []
});

module.exports = mongoose.model("Issue", issueSchema);