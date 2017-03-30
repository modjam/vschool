var cars = [];
var Car = function(color, model, miles) {  
    this.color = color;
    this.model = model;
    this.miles = miles;
	this.run = function() {
		console.log("Color:" + this.color + ", " + "Model:" + this.model + ", " + "Miles:" + this.miles + ", " + "is running");
	}
}
cars.push(new Car("blue", "honda", 500));
cars.push(new Car("red", "nissan", 1000));
cars.push(new Car("black", "toyota", 1500));

for(var i=0; i<3; i++) {
	cars[i].run();
}