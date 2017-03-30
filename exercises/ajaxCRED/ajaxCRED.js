$(document).ready(function() {
    get();
});

$("#post").click(function() {
    var t = $("#title").val();
    var d = $("#description").val();
    var p = $("#price").val();
    var im = $("#imgUrl").val();
    var c = $("#completed").is(":checked");
    var dat = {title: t, description: d, price: p, imgUrl: im, completed: c};
    
    $.ajax({
        url: "http://api.vschool.io/modjam/todo",
        type: "POST",
        data: dat,
        success: function() {
            get();
        }
    })
});

function get() {
    $.ajax({
        url: "http://api.vschool.io/modjam/todo",
        type: "GET",
        success: function(result) {
			$("#output").html("");
            for(var i = 0; i < result.length; i++) {
                $("#output").append('<li id='+result[i]._id+' class="list-group-item">' + result[i].title + '<button id='+result[i]._id+' onclick="deletes(this.id);" class="pull-right btn btn-danger btn-xs">delete</button></li>');
            }
        }
    })
};

function deletes(id) {
	$.ajax({
		url: "http://api.vschool.io/modjam/todo/" + id,
        type: "DELETE",
		success: function(data) {
			get();
		}
	})
}


