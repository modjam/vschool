var Student = function(name,dob, phone, grades, result) {
  this.name = name;
  this.dob = dob;
  this.phone = phone;
  this.grades = grades;
  this.generate = function() {
    console.log("Your Name is " + this.name + "\n your DOB is " + this.dob + "\n your phone is " + this.phone + "\n your grade is " + this.grades);
  }
  this.age = function(){
    var ageDifMs = Date.now() - this.dob.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - this.dob.getYear());
}
}

var myDate = new Date("1/1/2000");
var today = new Date(); 
console.log( today.getFullYear() - myDate.getFullYear());
var std1 = new Student ("kk", myDate, 3333,8,0);
std1.generate();

