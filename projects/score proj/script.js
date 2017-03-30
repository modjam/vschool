var Data = [];
var text = ["rooooooh", "chut up", "MEEN KHALAAS"];
var randomNumber = function(min, max) {
    return Math.floor(Math.random() * (max - min +1) + min);
}
function sortHighScore(a, b) {
    return a.highScore - b.highScore;
};

$("#btn").click(function() {
    var Name = $("#name").val();
    var Game = $("#game").val();
    var Date = $("#date").val();
    var HScore = $("#score").val();
    var Trash = $("#trash:checked").val();
	if(!Trash) {
		Trash = '';
	} else {
        Trash1 = randomNumber(0, text.length-1);
        Trash = text[Trash1];
    }
    var data = Data.push({name : Name, game : Game, date : Date, highScore : HScore, trash : Trash});
    
    var html = "<tr class='rem'><td> " + Name + "</td><td>" + Game + "</td><td>" + Date + "</td><td>" + HScore + "</td><td>" + Trash + "</td></tr>";
    $(".table").append(html);
});

$("#sort").click(function() {
	$('.rem').remove();
    Data.sort(sortHighScore);
var tableSorted;
    for(var i=0 ; i<Data.length ; i++) {

     tableSorted = '<tr class="rem"><td>'+Data[i].name+'</td><td>'+Data[i].game+'</td><td>'+Data[i].date+'</td><td>'+Data[i].highScore+'</td><td>'+Data[i].trash+'</td></tr>';
   $('.table').append(tableSorted);
    }
});

