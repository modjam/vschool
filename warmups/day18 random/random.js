function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
var Enemy = function(type) {
	var type = type;
	this.enemyType = "";
	this.hitPoints = 0;
	this.defence = 0;
	this.generate = function() {
		var index = getRandom(0, type.length-1);
		this.enemyType = type[index];
		if(type[index] === "Ancient Dragon") {
			this.hitPoints = getRandom(80, 100);
			this.defence = this.hitPoints * 3;
		} else if(type[index] === "Prowler") {
			this.health = getRandom(50, 79);
			this.defence = this.hitPoints * 3;
		} else {
			this.health = getRandom(0, 50);
			this.defence = this.hitPoints * 3;
		}
	}
}
var possibleNames = ["Ancient Dragon", "Prowler", "Mighty Grunt"];
for(var i=0; i<100; i++) {
	var tempEnemy = new Enemy(possibleNames);
	tempEnemy.generate();
	console.log(tempEnemy.enemyType);
	console.log(tempEnemy.hitPoints);
	console.log(tempEnemy.defence);
}