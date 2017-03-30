function largestNumber(num) {
	var NUM = [];
	var res = "";
	for (var i = 0; i < num.length; i++) {
		NUM.push(num[i] + "");
	}
	NUM.sort(function (a, b) {
		if (a + b > b + a) {
			return -1;
		} else if (a + b < b + a) {
			return 1;
		} else {
			return 0;
		}
	});
	for (var i = 0; i < NUM.length; i++) {
		res += NUM[i];
	}
	return parseInt(res);
}

console.log(largestNumber([50, 2, 1, 9]));
console.log(largestNumber([50, 60, 1, 70]));
console.log(largestNumber([50, 51, 55, 6]));