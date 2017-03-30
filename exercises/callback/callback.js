$("#btn").click(function() { 
	alert("done");
});

setTimeout(function() {
	$("#par").html("hffhhfh");
}, 1000);

var timer = setInterval(function() {
	console.log("you wait again");
}, 1000);
clearInterval(timer);

var student = {
	name: "ahmad",
	wakeUp: function(success, fail) {
	var doWakeUp = false;
	if(doWakeUp) {
		console.log("woke up");
		success();
	} else {
		console.log("still sleep");
		fail();
		}
	}
}

function drink() {
	console.log("drink water");
}

function sleep() {
	console.log("happy dreams");
}

student.wakeUp(drink, sleep);