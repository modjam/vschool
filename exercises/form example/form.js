
$("#btn").click(function() {
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var age = $("#age").val();
    var gender = $("#male:checked").val();
    var destination = $("#destination:checked").val();
    var restriction = $("#rest1:checked").val();
          
    alert("First Name: " + firstName + "\n" + "Last Name: " + lastName + "\n" + "Age: " + age + "\n" + "Gender: " + gender + "\n" + "Your Destination: " + destination + "\n" + "Food kind: " + restriction);
});
