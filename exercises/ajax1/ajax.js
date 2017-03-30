//$("#btn").click(function() {
//    var num = $("#number").val();
//	var xhr = new XMLHttpRequest();
//	xhr.onreadystatechange = function() {
//  		if(xhr.readyState  == 4 && xhr.status == 200) {
//    	var strData = xhr.responseText;
//    	var data = JSON.parse(strData);
//    	$("#output").html(data.objects[0].pokemon[num].name);
//  	} else if(xhr.readyState  == 4 && xhr.status != 200) 
//	{
//    	console.log(xhr.status);
//  }
//};
//xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true);
//xhr.send();   
//});



$("#btn").click(function() {
	$.ajax({
		url: "http://api.vschool.io:6543/pokemon.json",
		success: function(result) {
      $("#output").html(result["objects"][0]["pokemon"][$("#number").val()].name);
    }
  });
});

