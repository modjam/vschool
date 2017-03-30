var n = 1964;
var arr = n.toString().split('') ;
for(var i=0;i<arr.length;i++) {
  arr[i] = +arr[i] ;
}
console.log(arr);