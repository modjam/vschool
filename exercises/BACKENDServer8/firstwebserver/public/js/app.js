var ang = angular.module("app", []);

ang.service("todoService", function ($http) {
	this.getData = function () {
		return $http.get("http://localhost:8080/menu/")
	}
	this.postData = function (data) {
		return $http.post("http://localhost:8080/menu/", data)
	}
	this.delData = function (id) {
		return $http.delete("http://localhost:8080/menu/" + id)
	}
	this.datadone = function (id, data) {
		var queryString = "";
		var fullString = "";
		for (key in data) {
			queryString += key + "=" + data[key];
			fullString = fullString + queryString + "&";
			queryString = "";
		}
		return $http.put("http://localhost:8080/menu/" + id + "?" +fullString);
	}
});

ang.controller("control", function ($scope, todoService) {
	$scope.loadData = function () {
		todoService.getData().then(function (response) {
			$scope.items = response.data.data;
		}, function (error) {
			alert("error status: " + error.status);
		})
	};

	$scope.add = function () {
		var data = {
			name: $scope.task,
			cost: $scope.task1,
			type: $scope.task2
		}
		todoService.postData(data).then($scope.loadData);
		$scope.task = "";
		$scope.task1 = "";
		$scope.task2 = "";
	}

	$scope.delData = function (_id) {
		todoService.delData(_id).then($scope.loadData);
	};

	$scope.editTodo = function (id, tasks, tasks1, tasks2) {
		var newdata = {
			name: tasks,
			cost: tasks1,
			type: tasks2
		}
		todoService.datadone(id, newdata).then($scope.loadData);
		$scope.taskss = "";
		$scope.tasks11 = "";
		$scope.tasks22 = "";
		$scope.loadData();
	}
});