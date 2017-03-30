$(document).ready(function() {
    get();
});


function get() {
    $.ajax({
        url: "http://api.fixer.io/latest?base=USD",
        type: "GET",
        success: function(result) {
            for( var i in result.rates) {
                $("#list").append("<option value="+result.rates[i]+">"+i+"</option>");
            }
        }
    })
};


function change() {
    var input= parseFloat($("#num").val());
    var currency= parseFloat($("#list").val());
    $("#output").html("RESULT:  " + input*currency);
}