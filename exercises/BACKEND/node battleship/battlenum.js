var isNum = function(value) {
    if (isNaN(parseInt(value))) {
        return false;
    } else {
        return true;
    }
}

module.exports = isNum;