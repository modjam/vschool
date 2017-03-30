var vowels = "aeiou".split("");
var constants = "bcdfghjklmnpqrstvzywx".split("");


function vowelCount(str) {
  var count = 0;
  var str = str.toLowerCase();
  for(var i = 0; i < str.length; i++) {
    for(var j = 0; j < vowels.length; j++) {
      if(str[i] === vowels[j]) {
        count++;
      }
    }
  }
  return count;
}


function constantCount(str) {
  var count = 0;
  var str = str.toLowerCase();
  for(var i = 0; i < str.length; i++) {
    for(var j = 0; j < constants.length; j++) {
      if(str[i] === constants[j]) {
        count++;
      }
    }
  }
  return count;
}

console.log(vowelCount("JAcob"));
console.log(constantCount("JAcob"));