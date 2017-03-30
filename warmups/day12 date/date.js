var dDate = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
var toDay = weekday[dDate.getDay()];
function getAmPm(hours) {
    var amPm = hours >= 12 ? 'PM' : 'AM';
    return amPm;
}
console.log("Today is: " + toDay);
console.log("Current Time is: " + dDate.getHours() + ":" + dDate.getMinutes() + ":" + dDate.getSeconds() + " " + getAmPm(dDate.getHours()));