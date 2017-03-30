function deleteItem(itemId) {
	$(itemId).remove();
};

$("#adds").click(function() {
	var item = $("#title").val();
	console.log(item);
	$("#output").append("<li id='" + item + "'>" + item + '\t\t' + "<button onclick='deleteItem(" + item + ")'> Delete</button></li>");
	$("#title").val("");
});