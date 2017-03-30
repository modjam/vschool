var ang = angular.module("app", []);

ang.service("todoService", function ($http) {
    this.getData = function() {
		return $http.get("http://api.vschool.io/modjam/todo/")
	}
	this.postData = function(data) {
		$http.post("http://api.vschool.io/modjam/todo/",data)
	}
	this.delData = function(id) {
		$http.delete("http://api.vschool.io/modjam/todo/" + id)
}
    this.datadone = function(id, data) {
		return $http.put("http://api.vschool.io/modjam/todo/" + id, data);
}
});

ang.controller("control", function ($scope, todoService) {
    $scope.task;
    $scope.task1;
    $scope.tasks
	$scope.loadData = function() {
        todoService.getData().then(function(response) {
		$scope.items = response.data;
	}, function(error) {
		alert("error status: " + error.status);
	})
	};
    
    $scope.postData = function() {
        var myData = {
            title: $scope.task,
            description: $scope.task1
        }
         todoService.postData(myData).then($scope.loadData);
    };
        
     $scope.delData = function(id) {
         todoService.delData(id).then($scope.loadData);
    };
	
	$scope.editTodo = function(id,newdata){
		var newdata = {
			title: $scope.tasks,
			completed : true
		}
		todoService.datadone(id,newdata).then($scope.loadData);
	}
          

});