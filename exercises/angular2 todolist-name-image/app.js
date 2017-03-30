var ang = angular.module("app", []);
ang.controller("control", function ($scope) {
	$scope.array = [];
	$scope.submit = function() {			
		$scope.array.push({	
			title: $scope.title, 
			description: $scope.description, 
			url: $scope.url
		});
	}
})
    