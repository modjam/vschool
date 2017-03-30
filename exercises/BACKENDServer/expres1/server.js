var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;
app.get("/", function(req, res) {
	res.send("salamat alllllll");
})

app.listen(PORT, function() {
	console.log("listening on " + PORT + " good");
})