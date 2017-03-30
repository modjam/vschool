var app = angular.module("app.whyilove", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider.when("/whyilove", {
    templateUrl: "./whyilove/whyilove.html",
    controller: "whyiloveCtrl"
  });
});

app.controller("whyiloveCtrl", function($scope) {
	$scope.message = 'Lebanese';
	$scope.mess1 = 'DownTown';
	$scope.mess2 = 'Saida';
	$scope.mess3 = 'Jeita';
	$scope.mess4 = 'Baalbek';
	$scope.mess5 = 'Tripoli';
	$scope.mess6 = 'Arz';
	$scope.mess7 = 'Beetddeen';
	$scope.mess8 = 'Tyr';
	$scope.mess9 = 'Anjar';
});