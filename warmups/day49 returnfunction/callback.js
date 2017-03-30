function addBorder(word, leng) {
    var star = "* " + word;
    //console.log(word)
    for (var i = 0; i < leng; i++) {
        star += " ";
    }
    star += " *";
    return star;
}

function printStar(leng) {
    var star = "*";
    for (var i = 0; i < leng + 2; i++) {
        star += "*";
    }
    star += "*";
    return star;
}

function largestW(arr) {
    var max = arr[0].length;

    for (var i = 1; i < arr.length; i++) {
        {
            if (arr[i].length > max)
                max = arr[i].length;
        }
    }
    return max;
}

function print(arr) {
    var lengthMaxx = largestW(arr);
    var printString = printStar(lengthMaxx);
    for (var i = 0; i < arr.length; i++) {
        printString += "\n" + addBorder(arr[i], (lengthMaxx - arr[i].length));

    }
    printString += "\n" + printStar(lengthMaxx);
    console.log(printString);
}
var listWord = ["Hello", "World", "in", "a", "frame"];
print(listWord);