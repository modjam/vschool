var readlineSync = require("readline-sync");
var nums = [];

for(var i = 0; i < 3; i++) {
  nums.push(parseInt(readlineSync.question("Enter a number : ")));
}

// nums.sort(function(a, b) {
//   return a - b;
// });

function sort(arr) {
  for(var i = 0; i < arr.length; i++) {
    for(var j = i+1; j < arr.length; j++) {
      if(arr[i] > arr[j]) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

console.log(sort(nums));