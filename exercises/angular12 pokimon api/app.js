var ang = angular.module("app", []);

ang.service("myService", function ($http) {
    this.getData = function(number) {

		return $http.get("http://pokeapi.co/api/v2/pokemon/"+number);
	}
})

ang.controller("control", function ($scope, myService) {
   
	$scope.loadData = function() {
        myService.getData($scope.number).then(function(response) {
		$scope.show = response.data.name;
	}, function(error) {
		alert("error status: " + error.status);
	})
	};
})














