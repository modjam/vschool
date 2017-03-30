                          
$(".orange").hover(function() { 		
	$(".orange").css("background", "blue")
});

$(".orange").mousedown(function() {
	$(".orange").css("background", "red")
});

$(".orange").mouseout(function() {
	$(".orange").css("background", "yellow")
});

$(".orange").dblclick(function() {
	$(".orange").css("background", "green")
});

$(window).scroll(function() {
	$(".orange").css("background", "orange")
});

/*red code 82*/
$(window).keypress(function(e){
var code = e.keyCode;
      if(code == 82) { 
     $(".orange" ).css("background","red");
 }
});
/*blue code 66*/
$(window).keydown(function(e){
var code = e.keyCode;
    if(code == 66) { 
     $(".orange" ).css("background","blue");
 }
});
/*orange code 79*/
$(window).keydown(function(e){
var code = e.keyCode;
   if(code == 79) { 
     $(".orange" ).css("background","orange");
 }
});
/*green code 71*/
$(window).keydown(function(e){
var code = e.keyCode;
   if(code == 71) { 
     $(".orange" ).css("background","green");
 }
});
/*yellow code 89*/
$(window).keydown(function(e){
var code = e.keyCode;
    if(code ==	89) { 
     $(".orange" ).css("background","yellow");
 }
});
