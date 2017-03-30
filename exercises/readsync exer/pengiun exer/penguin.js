var readlineSync = require("readline-sync");

var playerName = readlineSync.question("Enter your Name to play ");
console.log("Welcome Mr.   " + playerName + " Lets Go ...");

var Parties = function(name, population) {
	this.name = name;
    this.population = population;
    };

function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

var party = [];
party[0] = new Parties("penguins", 1000000);
party[1] = new Parties("communists", 1000000);

var onHit = function(i) {
    var damage = -100000;
    party[i].population -= damage;
};

var onMiss = function() {
    console.log("you miss");
};

var attacks = getRandom(1, 2);
var sendNuke = function(party, onHit, onMiss) {
	var chance = getRandom(0, 1);
    var attack = getRandom(0, 1);
    var attacker = party[Math.floor(attack)].name;
    console.log("attacker is: " + attacker);
    if(attacker == "penguins") {
        if(chance = 1) {
            onHit();
            console.log(" you hit communists" + party[1].population);
        } else {
            onMiss();
        }
    } else {
        if(chance = 1) {
            onHit();
            console.log("you killed penguins" + party[0].population);
        } else {
            onMiss();
        }
    }
};

sendNuke(party);
