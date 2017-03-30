var lowerNum = function(a,b) {
	if (a < b) {
		console.log("lower num is" + a);
	} else {
		console.log("lower num is" + b);
	}
}

var monkeyTrouble = function(aSmile, bSmile) {
	if (aSmile == true && bSmile == true || aSmile == false && bSmile == false) {
		return true;
	}	else {
		return false;
	}
}

lowerNum(2,4);
console.log(monkeyTrouble(true,true));
console.log(monkeyTrouble(false,false));
console.log(monkeyTrouble(true,false));
console.log(monkeyTrouble(false,true));