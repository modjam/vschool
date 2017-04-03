var app = angular.module("app.signup", ["ngRoute", "authModule"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/signup", {
        templateUrl: "/views/signup.html",
        controller: "signupCtrl"
    })
})

app.controller("signupCtrl", function ($scope, authService, $location) {
    $scope.user = {};
    $scope.signup = function () {
        var data = {
            username : $scope.user.username,
            password : $scope.user.password,
            privilege: $scope.user.privilege
        }
        authService.signUp(data).then(function (response) {
			$location.path("\signin");
            console.log(response.data);
        }, function (response) {
            console.log(response.status);
        })
        $scope.user = {};
    }
    $scope.validate = function() {
    var val=true;
    if($scope.user.username) {
       val= val & false;
    } else if($scope.user.password) {
      val= val & false;
    } else if($scope.user.password1) {
      val= val & false;
    } else if($scope.user.password != $scope.user.password1) {
      val= val & false;
    } else {
      val= val & true;
    }
    return val;
  }
});