var word = function (str) {
    var symbols = ["_", "-", " ", "/"]
    var newStr = "";
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < symbols.length; j++) {
            if (str[i] == symbols[j]) {
                newStr += str[i + 1].toUpperCase();
                i += 2;
            }
        }
        newStr += str[i];
    }
    console.log(newStr);
}
word("barca-game vschool");