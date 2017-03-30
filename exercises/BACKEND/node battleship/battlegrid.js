var cell = require("./battlecell.js");

var printGrid = function(grid) {
    var result = "";
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) {
            result += grid[i][j].getSymbol() + " ";
        }
        result += "\n";
    }
    console.log(result);
}

var modifyCell = function(grid, x, y) {
    if (x > grid.length || y > grid[0].length) {
        console.log("coordinate not exist");
    } else if (grid[x][y].isHit) {
        console.log("you already hit this cell");
        return -1;
    } else if (!grid[x][y].isHit && grid[x][y].isShip) {
        console.log("you hit a ship");
        grid[x][y].getHit();
        return 1;
    } else {
        console.log("you hit water");
        grid[x][y].getHit();
        return 0;
    }
}

var getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var genGrid = function(width, height) {
    var grid = [];
    for (var i = 0; i < height; i++) {
        var row = [];
        for (var x = 0; x < width; x++) {
            var chance = getRandomInt(0, 1);
            if (chance) {
                row.push(new cell(false, false));
            } else {
                row.push(new cell(true, false));
            }
        }
        grid.push(row);
    }
    return grid;
}

module.exports = {
    printGrid: printGrid,
    modifyCell: modifyCell,
    genGrid: genGrid
}