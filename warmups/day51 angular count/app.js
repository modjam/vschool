var ang = angular.module("app", []);
ang.service("picA", function () {
	this.pica = 0;
	this.add = function () {
		this.pica++;
	}
});

ang.service("picB", function () {
	this.picb = 0;
	this.add = function () {
		this.picb++;
	}
});

ang.controller("control", function ($scope, picA, picB) {
	$scope.picAA = picA.pica;
	$scope.picBB = picB.picb;
	$scope.addR = function() {
		picA.add();
		$scope.picAA = picA.pica;
	}
	$scope.addB = function() {
        picB.add();
        $scope.picBB = picB.picb;
	}
    	$scope.reset = function() {
        $scope.picAA = 0;
        $scope.picBB = 0;
    }
});
  