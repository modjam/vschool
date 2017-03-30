 //this function generate the password than call the function checkLetter(password) and send the parameter password
function generatePassword() {
    var password = "";
    for (var i = 0; i < 8; i++) {
        password += String.fromCharCode(getRandomInt(33, 126));
    }
    checkLetter(password);
}
//this function check the password if contains the 4 conditions if not re-call the function generatePassword()
function checkLetter(pass) {
    var upperLetter = false,
        lowerLetter = false,
        specialChar = false,
        numberChar = false;
    for (var i = 0; i < pass.length; i++) {
        if (pass[i].charCodeAt(0) >= 65 && pass[i].charCodeAt(0) <= 90)
            upperLetter = true;
        if (pass[i].charCodeAt(0) >= 97 && pass[i].charCodeAt(0) <= 122)
            lowerLetter = true;
        if (pass[i].charCodeAt(0) >= 48 && pass[i].charCodeAt(0) <= 57)
            numberChar = true;
        if ((pass[i].charCodeAt(0) >= 33 && pass[i].charCodeAt(0) <= 47) || (pass[i].charCodeAt(0) >= 58 && pass[i].charCodeAt(0) <= 64) || (pass[i].charCodeAt(0) >= 91 && pass[i].charCodeAt(0) <= 96) || (pass[i].charCodeAt(0) >= 123 && pass[i].charCodeAt(0) <= 126))
            specialChar = true;

    }
    if (specialChar === true && numberChar === true && lowerLetter === true && upperLetter === true)
        {console.log(pass);
        alert(pass);}
    else {
        console.log("...Please Wait...");
        alert("...Please Wait...");
        generatePassword();
    }

}
// Returns a random integer between min (included) and max (included)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 