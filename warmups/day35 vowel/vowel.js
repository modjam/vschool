function vowels(str) {
    var mystr = str.toLocaleLowerCase();
    var count1 = 0;
    for (var i = 0; i < str.length; i++) {
        if (mystr[i] === "a" || mystr[i] === "e" || mystr[i] === "i" || mystr[i] === "o" || mystr[i] === "u") {
            count1++;
        }
    }
    return count1;
}
console.log("the vowels letters are =" + vowels("tell me"));

function constant(str) {
    var myconstant = str.toLowerCase();
    var count2 = 0;
    for (var i = 0; i < myconstant.length; i++) {
        if (myconstant[i] !== "a" && myconstant[i] !== "e" && myconstant[i] !== "i" && myconstant[i] !== "o" && myconstant[i] !== "u" && myconstant[i] !== " " ) {
            count2++;
        }
    }

   return count2;
}
console.log("the constant letters are =" + constant("tell me"));