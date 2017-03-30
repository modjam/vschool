var ang = angular.module("app", []);

ang.controller("addControl", function ($scope) {
   	$scope.add = function() {
		$scope.addTotal=$scope.num1+$scope.num2;
		$scope.num1=0;
		$scope.num2=0;
	}
});

ang.controller("mulControl", function ($scope) {
	$scope.mult = function() {
		$scope.timeTotal=$scope.num3*$scope.num4;
		$scope.num3=0;
		$scope.num4=0;
	}
});