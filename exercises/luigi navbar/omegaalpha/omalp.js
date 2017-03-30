var alpha = '\u03B1';
var omega = '\u03A9';
var multiArray = [[]];
for(var i=0; i<10; i++) {
	multiArray.push('\n');
	for(var j=0; j<10; j++) {
		if(j % 2 == 0) {
			multiArray.push(alpha + ' ');
		} else { 
			multiArray.push(omega + ' ');
		}
		
	}
}
console.log(multiArray.join(' '));