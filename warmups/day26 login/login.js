var alphabetSmall = "abcdefghigklmnopqrstuvwxyz"; 
var alphabetCapital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCaracters = "!@#$%&*+?";
var numbers = "0123456789";
var pass = "";

function randIntRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
function generate() {
  var pass = "";
for(var i = 0; i < 2; i++) {
	var alphaS = randIntRange(1, alphabetSmall.length);
	var alphaC = randIntRange(1, alphabetCapital.length);
	var specCar = randIntRange(1, specialCaracters.length);
	var num = randIntRange(1, numbers.length);
	pass += alphabetSmall[alphaS] + alphabetCapital[alphaC] + specialCaracters[specCar] + numbers[num];
  
}
  $("#w").html(pass);
}
//console.log(pass);
$("#submit").click(generate);