function alterCombine(ar1, ar2) {
  var result = [];
  for(var counter = 0, i = 0, x = 0; i < ar1.length || x < ar2.length; counter++) {
    if(counter % 2 === 0 && i < ar1.length) {
      result.push(ar1[i]);
      i++;
    } else if(counter %  2 !== 0 && x < ar2.length) {
      result.push(ar2[x]);
      x++;
    }
  }
  return result;
}

var stringArray = ["a", "b", "c"];
var numsArray = [1, 2, 3,4 ,5 ,6 ,7];
console.log(alterCombine(stringArray, numsArray));