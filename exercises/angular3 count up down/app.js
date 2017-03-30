var ang = angular.module("app", []);
ang.service("redServe", function () {
	this.add = function (redCounter) {
		redCounter +=1;
		this.totalRed = redCounter;
	}
	this.remove = function(redCounter) {
		redCounter -=1;
		this.totalRed = redCounter;
	}
});

ang.service("blueServe", function () {
	this.add = function (blueCounter) {
		blueCounter +=1;
		this.totalBlue = blueCounter;
	}
	this.remove = function(blueCounter) {
		blueCounter -=1;
		this.totalBlue = blueCounter;
	}
});

ang.controller("control", function ($scope, redServe, blueServe) {
	$scope.redCounter = 10;
	$scope.blueCounter = 10;
	$scope.addR = function() {
		redServe.add($scope.redCounter);
		blueServe.remove($scope.blueCounter);
		$scope.redCounter = redServe.totalRed;
		$scope.blueCounter = blueServe.totalBlue;
	}
	$scope.addB = function() {
		redServe.remove($scope.redCounter);
        blueServe.add($scope.blueCounter);
        $scope.redCounter = redServe.totalRed;
        $scope.blueCounter = blueServe.totalBlue;
	}
//    $scope.reset = function() {
//        $scope.redCounter = 10;
//        $scope.blueCounter = 10;
//    }
});
  