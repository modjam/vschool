var ang = angular.module("app", []);
var config = {  
    headers: {
        'X-Mashape-Key': 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm'
    }
};

ang.service("todoService", function ($http) {
    this.getData = function(t) {
		
		return $http.get("https://yoda.p.mashape.com/yoda?sentence=" + t, config);
	}
});
ang.controller("control", function ($scope, todoService) {
	$scope.submit = function(){
    todoService.getData($scope.string).then(function(response) {
		$scope.list = response.data;
	}, function(error) {
		alert("error status: " + error.status);
	});
	}
});