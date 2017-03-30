var readlineSync = require("readline-sync");

console.log('Battleships game!');

var coorX = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];


var boatNames = ['battleship', 'destroyer'];

var fleet = {
    battleship: {
        size: 5,
        boats: []
    },
    destroyer: {
        size: 4,
        boats: []
    }
};

var createBoat = function (size, name) {
    var boat = {
        positions: [],
        damage: 0
    };
    var direction = Math.floor(Math.random() * 2 + 1);
    if (direction == 1) {

       var boatX = Math.floor(Math.random() * (10 - size));
        var boatY = Math.floor(Math.random() * 10) + 1;
        for (var i = 0; i < size; i++) {
            boat.positions.push(coorX[i + boatX] + boatY);
        }
    } else {

       var boatX = Math.floor(Math.random() * 10);
        var boatY = Math.floor(Math.random() * (10 - size) + 1);
        for (var i = 0; i < size; i++) {
            boat.positions.push(coorX[boatX] + (boatY + i));
        }
    }

   var collision = false;

   boatNames.forEach(function (name) {

       fleet[name].boats.forEach(function (_this) {

           _this.positions.filter(function (val) {
                if (boat.positions.indexOf(val) != -1) {
                    collision = true;
                }
            });
        });
    });

   if (!collision) {

       if (size == 5) {
            fleet.battleship.boats.push(boat);
        } else {
            fleet.destroyer.boats.push(boat);
        }
    } else {

       createBoat(size);
    }
};


createBoat(fleet.battleship.size);
createBoat(fleet.destroyer.size);
createBoat(fleet.destroyer.size);



process.stdin.resume();
process.stdin.setEncoding('utf8');


var shoots = [];
var boatDestroyed = 0;

var getCoordinate = function () {
    console.log('');
    console.log('Give me a coordinate:');

   process.stdin.once('data', function (coordinate) {
        coordinate = (coordinate.replace(/(?:\r\n|\r|\n)/g, '')).toUpperCase();

       if (shoots.indexOf(coordinate) < 0) {
            shoots.push(coordinate);
            var touched = false;
            var numBoats = 0;

           boatNames.forEach(function (name) {
                fleet[name].boats.forEach(function (_this) {
                    numBoats++;
                    _this.positions.filter(function (val) {
                        if (val == coordinate) {
                            touched = true;
                            _this.damage = _this.damage + 1;

                           if (fleet[name].size == _this.damage) {
                                console.log('BOAT DESTROYED!!');
                                boatDestroyed++;
                            } else {
                                console.log('TOUCHED!');
                            }
                        }
                    });
                });
            });

           if (!touched) {
                console.log('WATER');
            }
        } else {
            console.log('Coordinate used. Use other position.');
        }

       if (boatDestroyed == numBoats) {
            console.log('');
            console.log('Congratulations, you win  :D');
            process.exit();
        } else {
            getCoordinate();
        }
    });
};

getCoordinate();