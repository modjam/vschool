var app = angular.module("app.home", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider.when("/home", {
    templateUrl: "./home/home.html",
    controller: "homeCtrl"
  });
});

app.service("moneyCoverter" , function($http) {
    this.getData = function() {
        return $http.get("http://api.fixer.io/latest?base=USD");
    }
});

app.controller("homeCtrl", function($scope, moneyCoverter) {
	$scope.message = 'Welcome To Lebanon';
    $scope.list = {};
    $scope.loadDate = function() {
        moneyCoverter.getData().then(function(response) {
            $scope.list = response.data;
        })
    };
    $scope.convert = function(cur) {
        console.log(cur);
        $scope.yourCurr = $scope.newCurr / cur ;
    }
});
