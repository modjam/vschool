var alphabet = "abcdefghigklmnopqrstuvwxyz";
var ask = require('readline-sync');  
var input = ask.question('What phrase would you like to encrypt? ').toLowerCase();  
var shift = parseInt(ask.question('How many letters would you like to shift? '));  


var encrypt = function(input, shift) {
    var ciphertext = "";
    for(var i = 0; i < input.length; i++) {
        var inputCharacter = input.charCodeAt(i);
        if(inputCharacter >= 97 && inputCharacter <= 122) {
            ciphertext += String.fromCharCode((inputCharacter - 97 + shift) % 26 + 97);
        } else if(inputCharacter >= 65 && inputCharacter <= 90) {
            ciphertext += String.fromCharCode((inputCharacter - 65 + shift) % 26 + 65);
        } else {
            ciphertext += String.fromCharCode(inputCharacter);
        }
    }
    return ciphertext;
};
console.log(encrypt(input, shift));
