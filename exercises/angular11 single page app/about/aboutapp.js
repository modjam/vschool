var app = angular.module("app.about", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider.when("/about", {
    templateUrl: "./about/about.html",
    controller: "aboutCtrl"
  });
});

app.controller("aboutCtrl", function($scope) {
	$scope.message = 'Population: 6,476,000';
});