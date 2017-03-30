var bobCoins=0;
var cheepCoins=0;
var goomCoins=0;
var totalCoins=0;

function bobFunction() {	document.getElementById("totalResultBob").innerHTMl="";
  var bobValue = document.getElementById("boboms").value;
	console.log(bobValue);
	bobCoins =bobCoins+Number(bobValue*7);
 document.getElementById("totalResultBob").innerHTML=bobCoins;
	 updateTotalCoins();
}

function cheepFunction() {	document.getElementById("totalResultCheep").innerHTMl="";
  var cheepValue = document.getElementById("cheep-cheep").value;
	console.log(cheepValue);
	cheepCoins =cheepCoins+Number(cheepValue*11);
 document.getElementById("totalResultCheep").innerHTML=cheepCoins;
	 updateTotalCoins();
}

function goomFunction() {	document.getElementById("totalResultGoom").innerHTMl="";
  var goomValue = document.getElementById("Gooms").value;
	console.log(goomValue);
	goomCoins =goomCoins+Number(goomValue*5);
 document.getElementById("totalResultGoom").innerHTML=goomCoins;
	 updateTotalCoins();
}

 function updateTotalCoins(){
document.getElementById("totalSum").value=bobCoins+goomCoins+cheepCoins;
}
