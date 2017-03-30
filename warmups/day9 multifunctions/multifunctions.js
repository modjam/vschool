var sumFunc = function (a, b) {
    return (a + b);
};

var largestNum = function (a, b, c) {
    if (a > b && a > c) {
        console.log(a);
    } else if (b > a && b > c) {
        console.log(b);
    } else {console.log(c);}
};

var evenOdd = function (a) {
    if (a%2 == 0) {
        console.log("even");
    } else {console.log("odd");}
};

var returnString = function (x) {
    if (x.length <= 20) {
        return x + x;
    } else {return x.slice(0, x.length);}
};

var quadrant = function(a, b, c) {
	var delta = (b*b) - (4*a*c);
	var x;
	var x1;
	if (delta == 0) {
		console.log("solution: " , -b / (2*a));
	} else if (delta > 0) {
		x = (-b + Math.sqrt(delta)) / (2*a);
		x1 = (-b - Math.sqrt(delta)) / (2*a);
		console.log("solutions: " , [x, x1]);		
	} else { console.log("no solution");}
};

console.log(sumFunc(2, 3));
largestNum(5, 4, 8);
evenOdd(5);
console.log(returnString("asdfghjklzxcvbnmpo"));
console.log(quadrant(1, 4, 1));