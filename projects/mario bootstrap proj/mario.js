var bobCoins=0;
var cheepCoins=0;
var goomCoins=0;
var totalCoins=0;

function bobFunction() {	
	$("#totalResultBob").html("");
  var bobValue = $("#boboms").val();
	console.log(bobValue);
	bobCoins =bobCoins+Number(bobValue*7);
 $("#totalResultBob").html(bobCoins);
	 updateTotalCoins();
}

function cheepFunction() {	
	$("#totalResultCheep").html("");
  var cheepValue = $("#cheep-cheep").val();
	console.log(cheepValue);
	cheepCoins =cheepCoins+Number(cheepValue*11);
 $("#totalResultCheep").html(cheepCoins);
	 updateTotalCoins();
}

function goomFunction() {	
	$("#totalResultGoom").html("");
  var goomValue = $("#Gooms").val();
	console.log(goomValue);
	goomCoins =goomCoins+Number(goomValue*5);
 $("#totalResultGoom").html(goomCoins);
	 updateTotalCoins();
}

 function updateTotalCoins(){
$("#totalSum").val(bobCoins+goomCoins+cheepCoins);
}
