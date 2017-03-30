//var std = {
//  name: 'jojo',
//  phone: 333,
//  dob: '26/1/2000',
//  grade: [12,13,14,15,10],
//  result: '',
//  
//}
//function print() {
//  var sum = 0;
//  for(var i=0; i<std.grade.length; i++) {
//    sum = sum + std.grade[i];
//  } 
//  if(sum>60){
//    console.log("the student is pass"+"with total"+ sum);
//     std.result ="pass";
//  }else{
//    console.log("the student is fail"+"with total"+ sum);
//  std.result ="fail";}
//}
//console.log(print());
var stds = [ {
  name: 'jojo',
  phone: 333,
  dob: '26/1/2000',
  grade: [20,21,22,23,24],
  result: '',
  avr:0,
  },
	{
  name: 'koko',
  phone: 222,
  dob: '26/2/2000',
  grade: [12,13,14,15,10],
  result: '',
        avr:0,
  },
	{
  name: 'lolo',
  phone: 111,
  dob: '26/3/2000',
  grade: [12,13,14,15,12],
  result: '',  avr:0,
  },
	{
  name: 'soso',
  phone: 444,
  dob: '26/4/2000',
  grade: [12,13,14,15,25],
  result: '',  avr:0,
  },
	{
  name: 'fofo',
  phone: 555,
  dob: '26/5/2000',
  grade: [12,13,14,15,50],
  result: '',  avr:0,
  }];

	function sortavr(a,b) {
    return a.avr - b.avr;
}	   
function print(std) {
    var arr = [];
    for(var i=0; i<std.length; i++) {
    var sum = 0;
    var avr = 0;
    for(var j=0; j<std[i].grade.length; j++) {
    sum += std[i].grade[j];
    } 
    avr = sum /std[i].grade.length ;
      //var obj = {name: std[i].name, avr: avr};
      //arr.push(obj);
      //console.log(arr);
//       std[i].push(avr);
      std[i].avr=avr;
    if(avr>=20) {
      console.log(std[i].name + " pass with total "+ avr);
      std.result ="pass";
  } else {
      console.log(std[i].name + " fail with total "+ avr);
      std.result ="fail";
  }
}
std.sort(sortavr);
  for(var i=0; i<stds.length; i++) {
    console.log(stds[i].name + "\n" + stds[i].avr);
  }
};
  print(stds);