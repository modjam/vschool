var Player = function(name, totalCoins, status, star) {  
    this.name = ""; 
    this.totalCoins = 0;
    var statuses = ["dead", "small", "big", "powered up"];
	this.status = "small";
	this.star = false;
	this.gameActive = true;
	this.setName = function(namePicked) {
		this.name = namePicked;
	};
	this.gotHit = function() {
		var index = statuses.indexOf(this.status);
		index -= 1;
		if(index <= 0) {
			this.gameActive = false;
		}
		this.status = statuses[index];
	};
	this.getPowerUp = function() {
		var index = statuses.indexOf(this.status);
		if(index < statuses.length-1) {
			index += 1;
			this.status = statuses[index];
		} else {
			console.log("max power");
		}
	};
	this.addCoin = function(amount) {
		this.totalCoins += amount;
	};
	this.print = function() {
		console.log("Name: " + this.name);
    	console.log("Status: " + this.status);
    	console.log("Coins: " + this.totalCoins);
	}
};
var mario = new Player();
mario.setName("Mario");
mario.gotPowerup();
mario.addCoin(10);
mario.print();
console.log(mario.gameActive);
console.log("-------------------");
mario.gotHit();
mario.gotHit();
mario.print();
console.log(mario.gameActive);
