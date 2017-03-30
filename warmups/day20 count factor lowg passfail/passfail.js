var std = {
  name: 'jojo',
  phone: 333,
  dob: '26/1/2000',
  grade: [12,13,14,15,10],
  result: '',
  
};
var sum = 0;
function print(sum) {
  for(var i=0; i<std.grade.length; i++) {
    sum = sum + std.grade[i];
  } 
    sum = sum/std.grade.length;
  if(sum>60){
    console.log("the student is pass"+"with total"+ sum);
     std.result ="pass";
  }else{
    console.log("the student is fail"+"with total"+ sum);
  std.result ="fail";}
}
console.log(std);