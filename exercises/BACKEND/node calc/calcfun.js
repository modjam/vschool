var addNum = function(a, b) {
	return a+b;
}
var minusNum = function(a, b) {
	return a-b;
}
var multNum = function(a, b) {
	return a*b;
}
var divNum = function(a, b) {
	return a/b;
}
var expoNum = function(a, b) {
	return Math.pow(a, b);
}
module.exports= {
	add: addNum,
	minus: minusNum,
	mult: multNum,
	div: divNum,
	expo: expoNum
}