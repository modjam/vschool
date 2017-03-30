var app = angular.module("app.signin", ["ngRoute" ,"authModule", "req"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/signin", {
        templateUrl: "/views/signin.html",
        controller: "signinCtrl"
    })
})

app.controller("signinCtrl", function ($scope, authService,$location) {
    $scope.user = {};
    $scope.signin = function () {
        var data = {
            username: $scope.user.username,
            password: $scope.user.password
        }
        authService.signIn(data).then(function (response) {
            $location.path('/home')
            console.log(response.data);
        }, function (response) {
            console.log(response.status);
        })
        $scope.user = {};
    }
})