function num(x) {
	var sum = 0;
	for(var i=0; i<x.length; i++) {
		sum = sum + x[i];
	}
	return sum;
}
var array = [1,2,3,4,5];
console.log(num(array));