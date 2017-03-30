var al = "abcdefghijklmnopqrstuvwxyz";
var spec = "!@#$%^&*()_+?";
var nums = "1234567890";

var charSets = [al, al.toUpperCase(), spec, nums];

function testPassword(str) {
  for(var i = 0; i < charSets.length; i++) {
    var pass = false;
    for(var j = 0; j < charSets[i].length; j++) {
      for(var x = 0; x < str.length; x++) {
        if(str[x] == charSets[i][j]) {
          pass = true;
          break;
        }
      }
    }
    if(pass == false) {
      return false;
    }
  }
  return true;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function genPassword(length) {
  var password = "";
  while(!testPassword(password)) {
    console.log(password);
    password = "";
    for(var i = 0; i < length; i++) {
      var set = charSets[getRandomInt(0, charSets.length -1)];
      var char = set[getRandomInt(0, set.length - 1)];
      password += char;
    }
  }
  return password;
}

document.getElementById("submit").addEventListener("click", function() {
  var length = parseInt(document.getElementById("length").value);
  if(length >= 8) {
    document.getElementById("output").innerHTML = genPassword(length);
  } else {
    alert("Must be at least 8 charcters");
  }
});