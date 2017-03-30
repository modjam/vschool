var data = [0, 1];
for(var i=1; i<99; i++) {
	data.push(data[i]+data[i-1]);
}

var sum = 0;
for(var i=0; i<data.length; i++) {
	sum += data[i];
} 

console.log(data);
console.log(sum);