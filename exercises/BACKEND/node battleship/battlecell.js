var cell = function(isShip, isHit) {
    this.isShip = isShip;
    this.isHit = isHit;
    this.getHit = function () {
        this.isHit = true;
    }
    this.getSymbol = function () {
        if (!this.isHit) {
            return "-";
        } else if (this.isShip) {
            return "X";
        } else {
            return "O";
        }
    }
};
module.exports = cell;