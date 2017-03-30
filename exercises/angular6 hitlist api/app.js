var ang = angular.module("app", []);

ang.service("todoService", function ($http) {
    this.getData = function() {
		return $http.get("http://api.vschool.io:6543/hitlist.json")
	}
});
	
ang.controller("control", function ($scope, todoService) {
	$scope.loadData = function() {
        todoService.getData().then(function(response) {
		$scope.items = response.data;
	}, function(error) {
		alert("error status: " + error.status);
	})
	};
})
    

