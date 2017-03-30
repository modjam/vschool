var ang = angular.module("app", ["myStore"]);



ang.controller("control", function ($scope, addService) {
	$scope.items = addService.itemList;
	$scope.total = addService.total;
	$scope.addItem = function() {
		addService.add($scope.name, $scope.cost);
		$scope.total = addService.total;
	}
});