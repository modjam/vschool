var Car = function(type, model, color) {
  this.carType = type;
  this.carModel = model;
  this.carColor = color;
  this.start = function(action, speed, colors, type) {
    console.log("I turn the key on in the " + this.carType + " car");
    action(speed, colors, type);
  };
  this.drive = function(speed, colors, type) {
    console.log("I am driving at " + speed + " kph" + " in the " + colors + " " + type + " car");
  }
}

var oldCar = new Car("Fiat", 500, "white");
oldCar.start(oldCar.drive,200, "red", "BMW");