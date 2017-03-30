var readlineSync = require("readline-sync");
var name = readlineSync.question("what is your name ");
console.log("your name " + name.toUpperCase());
console.log("you entered " + name.length + "characters");

var age = readlineSync.question("what is your age ");
console.log("your age: " + age);

var favColor = readlineSync.question("what is your favorate color ");
console.log("your favorate color " + favColor);
console.log("your name & color " + name.concat(favColor));

var text4 = readlineSync.question("write a very long number and illgive you the end of it : ");
if (text4.length >= 20) {
   console.log(text4.substr(21 , text4.length));
}
var text5 = readlineSync.question( "please tell me where to start : "); 
var text6 = text4.substring(0 , text5);
console.log( " " + text6);
var text7 =readlineSync.question("if you like to continue typing the last sentence type only ?" );
console.log( " " + text6 + " " + text7);
