var readlineSync = require("readline-sync");

var game = require("./battlegrid.js");
var isNum = require("./battlenum.js");

var gameBegin = function() {
    var score = 0;
    var grid = game.genGrid(4, 4);
    console.log("\n*** Welcome to Ship Battle ***\n");
    console.log("******************************\n");
    console.log("your cells coordinades are from (0,0) to (3,3)\n");
    console.log("choose option: 'a' to attack, 'p' to print grid, 's' to get your score, 'q' to quit the game\n");
    while (true) {
        var input = readlineSync.question("option please: ");
        if (input == "a") {
            var x = " ";
            while (!isNum(x)) {
                x = readlineSync.question("\n Give x coordinate: ");
            }
            var y = " ";
            while (!isNum(y)) {
                y = readlineSync.question("\n Give y coordinate: ");
            }
            if (game.modifyCell(grid, x, y)) {
                score++;
            }
        } else if (input == "p") {
			console.log("\n");
            game.printGrid(grid);
        } else if (input == "s") {
            console.log(" \n your score: " + score);
        } else if (input === "q") {
			console.log("\n BYEEEEEE");
            break;
        } else {
            console.log("wrong input!!");
        }
    }
}
console.log(gameBegin());