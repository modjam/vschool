var std = {
  name: 'jojo',
  phone: 333,
  dob: '26/1/2000',
  grade: [12,13,14,15,10],
  
}
function print() {
  var low = std.grade[0];
  for(var i=1; i<std.grade.length; i++) {
    if(low > std.grade[i]) {
      low = std.grade[i];
    } 
}
return low;
}
console.log(std.name + " " + print());