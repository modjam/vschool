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
            password : $scope.user.password
        }
        authService.signUp(data).then(function (response) {
			$location.path("\signin");
            console.log(response.data);
        }, function (response) {
            console.log(response.status);
        })
        $scope.user = {};
    }
})