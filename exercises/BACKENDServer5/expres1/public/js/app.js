var ang = angular.module("app", []);

ang.service("todoService", function ($http) {
    this.getData = function() {
		return $http.get("http://localhost:8080")
	}
	this.postData = function(data) {
		$http.post("http://localhost:8080/menu",data)
	}
	this.delData = function(id) {
		$http.delete("http://localhost:8080/menu" + id)
}
    this.datadone = function(id, data) {
		return $http.put("http://localhost:8080/menu" + id, data);
}
});

ang.controller("control", function ($scope, todoService) {
    $scope.task;
    $scope.task1;
    $scope.task2;
	$scope.loadData = function() {
        todoService.getData().then(function(response) {
		$scope.items = response.data;
	}, function(error) {
		alert("error status: " + error.status);
	})
	}
    
//    $scope.postData = function() {
//        var myData = {
//            name: $scope.task,
//            cost: $scope.task1,
//            type: $scope.task2
//        }
//         todoService.postData(myData).then($scope.loadData);
//    };
//        
//     $scope.delData = function(id) {
//         todoService.delData(id).then($scope.loadData);
//    };
//	
//	$scope.editTodo = function(id,newdata){
//		var newdata = {
//			name: $scope.task,
//			cost: $scope.task1,
//            type: $scope.task2
//		}
//		todoService.datadone(id,newdata).then($scope.loadData);
//	}
          

});