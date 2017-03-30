var std = [
	{
		name: 'ahmad',
		grade: 65,
	},
	{
		name: 'jacob',
		grade: 59,
	},
	{
		name: 'haitham',
		grade: 55,
	},
	{
		name: 'jameel',
		grade: 82,
	},
	{
		name: 'jojo',
		grade: 91,
	}
];
var success =[];
var fail =[];
for(var i=0; i<std.length; i++) {
	if(std[i].grade < 60) {
		fail.push({name : std[i].name , grade : std[i].grade})
	} else {
		if(std[i].grade >= 90) {
		success.push({name : std[i].name , grade : "exelent"})
		} else if(std[i].grade >= 80 && std[i].grade < 90) {
			success.push({name : std[i].name , grade : "good"})
		} else {
			success.push({name : std[i].name , grade : "pass"})
	}
}};
console.log(success);
console.log(fail);