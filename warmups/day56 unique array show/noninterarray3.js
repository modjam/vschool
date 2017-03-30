function uniqueDifferntArray(separator) {
    var result = ""; // initialize list
    var i;
    var uniqueSet = [];
    // iterate through arguments
    if (arguments.length > 1) {
        console.log("you have " + arguments.length + " arrays")
            //var set1Array = arguments[0];
        var set2 = [];
        var set1 = arguments[0];
        for (l = 1; l < arguments.length; l++) {
            set2 = arguments[l];
            var k = 0;
            for (var i = 0; i < set1.length; i++) {
                if (searchUnique(set1[i], set2) == -1) {
                    //            console.log("print: "+set1[i])
                    uniqueSet[k] = set1[i];
                    k++;
                }
            }
            for (var j = 0; j < set2.length; j++) {
                if (searchUnique(set2[j], set1) == -1) {
                    //            console.log("print: "+set2[j])
                    uniqueSet[k] = set2[j];
                    k++;
                }
            }
            set1 = uniqueSet;

        }

        return uniqueSet;
    } else {
        console.log("you have " + arguments.length + " array")
        return arguments[0];
    }
}

function searchUnique(nb1, set) {
    var indNb = set.indexOf(nb1);
    return indNb;
}
console.log("Send One Array: " + uniqueDifferntArray([1, 2, "hiba", 7, 9]));
console.log("Send Two Array: " + uniqueDifferntArray([1, 2, "hiba", 7, 9], [2, 3, 4, 8, 10]));
console.log("Send Three Array: " + uniqueDifferntArray([1, 7, 9], [6, 9, 3], [3, 4, 88]));