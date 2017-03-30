var app = angular.module("app.about", ["ngRoute", "uiGmapgoogle-maps"]);

app.config(function($routeProvider) {
  $routeProvider.when("/about", {
    templateUrl: "./about/about.html",
    controller: "aboutCtrl"
  });
});

app.controller("aboutCtrl", function($scope) {
	$scope.message = '6,476,000';
	$scope.message1 = '10452';
	$scope.map = {
        center: {
            latitude: 33.8293646,
            longitude: 35.7923195
        },
        zoom: 8
    };
    $scope.options = {
        scrollwheel: false
    };
});
