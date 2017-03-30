document.getElementById("search").addEventListener("click", function() {
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
	if(xhr.readyState == 4 && xhr.status == 200) {
		var strData = xhr.responseText;
		var data = JSON.parse(strData);
		console.log("Data received");
		document.getElementById("output").innerHTML = (data["name"] + " " + data["speed"]);
	} else if(xhr.readyState == 4 && xhr.status != 200) {
		console.log(xhr.status);
	}
};
var number = document.getElementById("term").value;
xhr.open("GET", "http://pokeapi.co/api/v1/pokemon" + number + "/", true);
xhr.send();
});



//var xhr = new XMLHttpRequest(); 
//console.log("My script has loaded"); 
//xhr.onreadystatechange = function() {
//    if(xhr.readyState  == 4 && xhr.status == 200) {
//        var strData = xhr.responseText;    
//        var data = JSON.parse(strData);    console.log(data["name"]);    console.log(data["gender"]);  
//    } else if(xhr.readyState  == 4 && xhr.status != 200) {    console.log(xhr.status);  
//        }
//}; 
//xhr.open("GET", "http://swapi.co/api/people/1/", true); xhr.send();