var ask = require('readline-sync');
var input = ask.question("enter your choice : rock , paper, ceazar");

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var possibleChoose = ["rock", "paper", "ceazar"];
var randomChoose = function (choose) {
    this.pcChoose = "";
    this.generate = function () {
        var index = getRandom(0, choose.length - 1);
        this.pcChoose = choose[index];
    };
};


if (input == "rock") {
    console.log("You choose : " + input);
    var tempChoose = new randomChoose(possibleChoose);
    tempChoose.generate();
    console.log("PC choose : " + tempChoose.pcChoose);
    if (tempChoose.pcChoose == "ceazar") {
        console.log("You WIN");
    } else if (tempChoose.pcChoose == "paper") {
        console.log("You LOST");
    }else if (tempChoose.pcChoose == "rock") {
        console.log("DRAW");
    }

} else if (input == "paper") {
    console.log("You choose : " + input);
    var tempChoose = new randomChoose(possibleChoose);
    tempChoose.generate();
    console.log("Pc choose : " + tempChoose.pcChoose);
    if (tempChoose.pcChoose == "ceazar") {
        console.log("You WIN");
    } else if (tempChoose.pcChoose == "rock") {
        console.log("You LOST");
    }else if (tempChoose.pcChoose == "paper") {
        console.log("DRAW");
    }
} else if (input == "ceazar") {
    console.log("You choose : " + input);
    var tempChoose = new randomChoose(possibleChoose);
    tempChoose.generate();
    console.log("Pc choose : " + tempChoose.pcChoose);
    if (tempChoose.pcChoose == "rock") {
        console.log("You LOST");
    } else if (tempChoose.pcChoose == "paper") {
        console.log("You WIN");
    }else if (tempChoose.pcChoose == "ceazar") {
        console.log("DRAW");
    }

} else {
    console.log("wrong choice");
}