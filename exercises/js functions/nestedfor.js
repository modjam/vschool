var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];  
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var all = [];

for(var i=0; i<people.length; i++) {
	all.push(people[i]);
	for(var j=0; j<alphabet.length; j++) {
		all.push(alphabet[j]);
	}
}
console.log(all);