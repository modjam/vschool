function letterFreq(str) {
  str = str.toLowerCase();
  var freq = {};
  for(var i = 0; i < str.length; i++) {
    if(freq[str[i]] == undefined) {
      freq[str[i]] = 0;
    }
    freq[str[i]] += 1;
  }
  return freq;
}

var phrase = "slimy smelly solution";
console.log(letterFreq(phrase));