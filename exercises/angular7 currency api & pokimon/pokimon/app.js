var ang = angular.module("app", []);

ang.service("pokService", function ($http) {
	this.pokimonList = [];
    this.addPok = function(name) {
		if(this.pokimonList.indexOf(name) == -1) {
			this.pokimonList.push(name);
		} else {
			alert("exist name");
		}
	};
	this.delPok = function(name) {
		var index = this.pokimonList.indexOf(name);
			if(index != -1) {
				this.pokimonList.splice(index, 1);
			} else {
				alert("input not found");
			}
		};
	});

ang.controller("control", function ($scope, pokService) {
    $scope.display = [];
		$scope.add = function() {
			pokService.addPok($scope.input);
			$scope.display = pokService.pokimonList;
			$scope.input = "";
		}
        $scope.remove = function() {
			pokService.delPok($scope.input);
			$scope.display = pokService.pokimonList;
			$scope.input = "";
		}
});