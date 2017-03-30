var readlineSync = require("readline-sync");
var name = readlineSync.question("Enter your name to play ");
console.log("Welcome Hero: " + name + "\n");

var tempEnem = [];
var playerHealth = 100;
var reward = ["gold", "health"];
var playerReward = "";

function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var Enemy = function(type) {
	this.allEnemies = [];
    this.enemyName = "";
    this.hitPoints = 0;
    this.block;
	this.generate = function() {
        for(var i=1; i<type.length+1;i++) {
            this.enemyName = type[i-1];
            this.hitPoints = getRandom(parseInt((60/i)),parseInt((66/i)));
            this.block= this.hitPoints*2;
            this.allEnemies[i-1] = { eName:this.enemyName, hitPoints:this.hitPoints, block: this.block};
        }
    }}

var randomEnemy = function(play) {
    var index = getRandom(0, 2);
    /*console.log(tempEnem.allEnemies[index].eName + "\n" + tempEnem.allEnemies[index].hitPoints + "\n" + tempEnem.allEnemies[index].block);*/
    if(play === "w") {
        var decide = readlineSync.question("press A to attack enemy or R to run away ");
        if(decide === "a") {
        attackFunc(tempEnem, index);
        } else if(decide === "r") {
        runFunc("r");
        } else {
            console.log("A or R please!!! \n");
            randomEnemy(play);
        }
    } else if(play === "r") {
        runFunc("r");
    } else {
        attackFunc(tempEnem, x);
    }
}

var runFunc = function(run) {
    if(run === "r") {
        if(getRandom(1, 2) === 1) {
            randomEnemy("r");
        } else {
            console.log("you escape from enemy \n");
            randomEnemy("w");            
        }
    } else {
        var decide = readlineSync.question("press A to attack enemy or R to run away ");
        runFunc(decide);
    }
}
var attackFunc = function(dumpEnemy,eLocate) {
    var enemyBlock = dumpEnemy.allEnemies[eLocate].block;
    var enemyHit = dumpEnemy.allEnemies[eLocate].hitPoints;
    var enemyName = dumpEnemy.allEnemies[eLocate].enemyName;
    console.log(enemyName + " Block " + enemyBlock);
    var playerHits = getRandom(1, 100);
    if(enemyBlock<palyerHits) {
        console.log("good you kill the enemy \n");
        dumpEnemy.allEnemies.splice(eLocate,1);
        playerReward += " " + reward[getRandom(0,2)];
        if(dumpEnemy.allEnemies.length <= 0) {
            console.log(" *** Great Job you WIN *** " + "\n");
        } else {
            playerHealth += playerHealth + 50;
            randomEnemy("w");
        }
    } else {
        dumpEnemy.allEnemies[eLocate].block = (enemyBlock-playerHits);
        enemyBlock = dumpEnemy.allEnemies[eLocate].block;
        console.log(" Enemy Name " + enemyName + "\n" + " Enemy Block " + enemyBlock);
        playerHealth = playerHealth - enemyHit;
        if(playerHealth <= 0) {
        console.log(" SORRY YOU ARE DIED \n \n BYE ");
    } else {
        var decide = readlineSync.question("press A to attack enemy or R to run away ");
        if(decide === "r") {
            runFunc("r");
        } else if(decide === "a") {
            attackFunc(dumpEnemy, eLocate);
        } else {
            attackFunc(dumpEnemy, eLocate);
        }
    }
    }
}
var begin = function() {
    var possibleEnemy = ["LION", "TIGER", "WOLF"];
    dumpEnemy = new Enemy(possibleEnemy);
    dumpEnemy.generate();
    var walk = readlineSync.question("Please Press (w) to  walk:  ") ;
    randomEnemy("w");
}
begin();