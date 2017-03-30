var readlineSync = require("readline-sync");

function getRandom(min,max){
    return Math.floor(Math.random()*(max -min+1))+min;
}

var playerName = readlineSync.question("Enter your Name to play ") ;
console.log("Welcome Mr.   " + playerName + " Lets Go ...");

var Player = { name : playerName ,
               Hp : 100 ,
               Inventeory : [],
               Attack : getRandom(50,100)
               }; 

var possiblEenemy = ["Lion","Tiger","Wolf"];
var Inventory = ["POWER","GOLD","GUN"];

var RandomEnemey = function(enemyName) {
   enemyName  = enemyName;
    this.EnemyName = "";
    this.health = 100;
    this.attack = 0;
    this.generate = function() {
    var index = getRandom(0,possiblEenemy.length-1);
    this.EnemyName = enemyName[index];
        if(enemyName[index] == "Lion") {
            this.attack = getRandom(10,15);
        } else if (enemyName[index] == "Tiger") {
            this.attack = getRandom(10,13);
        }else if (enemyName[index] == "Wolf") {
            this.attack = getRandom(10,11);
        }
}
};

var randomAward=function(Inventory) {
    Inventory = Inventory;
    this.YourAward = "";
    this.generateAward = function() {
        var index = getRandom(0,Inventory.length-1);
        this.YourAward = Inventory[index];    
    }
};

while(possiblEenemy.length >= 2) {
    var userinput = readlineSync.question("Enter Your option 'w' to walk or 'p' to show your info ");
    if(userinput == "p") {
        console.log(Player);
    } else if(userinput == "w") {
        var chance = getRandom(0,100);
        if(chance > 50) {
            var enemy = new RandomEnemey(possiblEenemy);
            enemy.generate();
            console.log("you met enemy " + enemy.EnemyName);
            while(Player.Hp > 0 && enemy.health > 0) {
                var userinput = readlineSync.question("press a to attack or r to run away  ");
                if(userinput == "r") {
                    chance = getRandom(0,100);
                    if(chance > 50) {
                        console.log("You escaped from enemy");
                        break;
                    } else {
                        console.log("hahaha you did not escape");
                        Player.Hp -= damage;
                        console.log ( "your bleeding " + Player.Hp)
                    }
                } else if(userinput == "a") {
                    chance = getRandom(0,100);
                    if(chance > 50) {
                        var damage = Player.Attack;
                        console.log("You hit the enemy for " + damage);
                        enemy.health -= damage; 
                        console.log ("Enemy Health " + enemy.health ); 
                        console.log(playerName + " You are hurt " + Player.Hp)
                        if(enemy.health <= 0) {
                            var tempAward = new randomAward(Inventory);
                            tempAward.generateAward();
                            console.log("You killed the enemy get Award " + tempAward.YourAward); Player.Inventeory.push(tempAward.YourAward);
                            possiblEenemy.pop(enemy);
                            break;
                        }
                    } else {
                        console.log("You missed the enemy");
                    }
                } else {
                    console.log(" choose view for player info or w to walk");
                }
                //console.log("Its Enemy turn ");
                chance = getRandom(0,100);
                if(chance > 50) {
                    var damage = enemy.attack;
                    console.log("enemy hits you for " + damage);
                    Player.Hp -= damage;
                } else {
                    console.log("the enemy hit you");
                }
            }
            } if(Player.Hp <= 0) {
                console.log("hahaha you lost  " + playerName);
                break;
        }
    }else {
        console.log("wrong input")
    }
}
if(Player.Hp <= 0) {
    console.log("hahaha you lost");
} else {
  console.log("You WON the game here your awards \n ");
  console.log(Player.Inventeory);
}