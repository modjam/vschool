var readlineSync = require("readline-sync");
var results = require("./calcfun.js")
var num1 = readlineSync.question("Please enter first num: ");
var num2 = readlineSync.question("Please enter second num: ");
var opperation = readlineSync.question("Please choose operation: + , - , * , / , e ");

    var result = 0;
    if(opperation == "+") {
        result = results.add(parseInt(num1),parseInt(num2));
		console.log(result);
	} else if(opperation == "-") {
        result.minus(parseInt(num1),parseInt(num2));
		console.log(result);
    } else if(opperation == "*") {
        result.mult(parseInt(num1),parseInt(num2));
		console.log(result);
    } else if(opperation == "/") {
        result.div(parseInt(num1),parseInt(num2));
		console.log(result);
    } else if(opperation == "e") {
        result.expo(parseInt(num1),parseInt(num2));
		console.log(result);
	} else {
        Error ("Wrong operation try again later");
    }

