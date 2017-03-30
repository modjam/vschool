var antiCaps = function(str) {
	var txt = "";
	for(var i=0; i<=str.length; i++) {
		if(str[i] === str[i].toUpperCase()) {
			txt += str[i].toLowerCase();
		} else {
			txt += str[i].toUpperCase();
		}
	}
	return txt;
};
console.log("adQWklAAA");
console.log(antiCaps("adQWklAAA"));