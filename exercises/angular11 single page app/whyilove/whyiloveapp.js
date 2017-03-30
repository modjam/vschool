var app = angular.module("app.whyilove", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider.when("/whyilove", {
    templateUrl: "./whyilove/whyilove.html",
    controller: "whyiloveCtrl"
  });
});

app.controller("whyiloveCtrl", function($scope) {
	$scope.message = 'Lebanon';
});