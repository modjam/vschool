var app = angular.module("app", []);
app.service("moneyCoverter" , function($http) {
    this.getData = function() {
        return $http.get("http://api.fixer.io/latest?base=USD");
    }
});
app.controller("control", function($scope,moneyCoverter) {
    $scope.list = {};
    $scope.loadDate = function() {
        moneyCoverter.getData().then(function(response) {
            $scope.list = response.data;
        })
    };
    $scope.convert = function(cur) {
        console.log(cur);
        $scope.convertedCurr = cur * $scope.yourCurr;
    }
});