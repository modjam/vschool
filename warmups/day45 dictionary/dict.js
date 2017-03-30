var dict = {};
function addWord(word, def) {
    if(!dict[word]) {
        dict[word] = def;
    } else {
        console.log("word already exists");
    }
}
function lookup(word) {
    if(dict[word]) {
        console.log("Word: " + word);
        console.log("Definition: " + dict[word]);
    } else {
        console.log("word does not exist");
    }
}

addWord("lolo", "lili");
lookup("lolo");