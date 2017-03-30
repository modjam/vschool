var ang = angular.module("app", []);
ang.service("redServe", function () {
	this.value = 10;
    this.add = function() {
        this.value++;
    } 
    this.remove = function() {
        if(this.value === 0) {
            this.value = 10;
        } else {
            this.value--;
        }
    }
});

ang.service("blueServe", function () {
	this.value = 10;
    this.add = function() {
        this.value++;
    } 
    this.remove = function() {
        if(this.value === 0) {
            this.value = 10;
        } else {
            this.value--;
        }
    }
});

ang.controller("control", function ($scope, redServe, blueServe) {
    $scope.redCounter = 10;
    $scope.blueCounter = 10;
	$scope.addR = function() {
		redServe.add($scope.redCounter);
		blueServe.remove($scope.blueCounter);
		$scope.redCounter = redServe.value;
		$scope.blueCounter = blueServe.value;
	}
	$scope.addB = function() {
		redServe.remove($scope.redCounter);
        blueServe.add($scope.blueCounter);
        $scope.redCounter = redServe.value;
        $scope.blueCounter = blueServe.value;
	}
});
  