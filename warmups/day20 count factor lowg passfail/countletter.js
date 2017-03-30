var text = "Hello hi Hey";
text = text.toUpperCase();
var count = 1;
var savedLetter = "";
for (var i = 0; i < text.length; i++) {
	if ((savedLetter.indexOf(text[i]) == -1)) {
		savedLetter = savedLetter + text[i];
		for (var j = i + 1; j < text.length; j++) {
			if ((text[i] === text[j])) {
				count++;
			}
		}
		console.log(text[i] + " " + count);
	}
	count = 1;
}