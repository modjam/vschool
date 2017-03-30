var ang = angular.module("app", ["myStore"]);

ang.controller("control", function ($scope, addService) {
	$scope.arr = addService.arr;
	$scope.submit = function() {
		addService.submit($scope.title, $scope.description, $scope.url);
	}
})
    