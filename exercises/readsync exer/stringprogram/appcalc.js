var readlineSync = require("readline-sync");

var num1 = readlineSync.question("Enter first number: ");
console.log("first number is: " + num1);
var num2 = readlineSync.question("Enter second number: ");
console.log("Second number is: " + num2);
var opperation = readlineSync.question("Enter one opperation[ + , - , * , /]: ");
var operation = function(num1, num2) {
    var result = 0;
    if(opperation == "+") {
        result = Number(num1) + Number(num2);
		console.log(result);
    } else if(opperation == "-") {
        result = Number(num1) - Number(num2);
		console.log(result);
    } else if(opperation == "*") {
        result = Number(num1) * Number(num2);
		console.log(result);
    } else if(opperation == "/") {
        result = Number(num1) / Number(num2);
		console.log(result);
    } else {
        Error ("Wrong operation try again later");
    }
}
operation(num1, num2);


