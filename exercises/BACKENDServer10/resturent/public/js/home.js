var app = angular.module("app.home", ["ngRoute","req"]);

app.config(function($routeProvider) {
  $routeProvider.when("/home", {
    templateUrl: "../views/home.html",
    controller: "homeCtrl"
  });
});

app.controller("homeCtrl", function($scope, requests) {
	$scope.userInput = {};
    $scope.Items = [];
    $scope.loadData = function() {
        requests.getData().then(function(response) {
            var tempData = response.data.data;
            $scope.Items = [];
            for(var i = 0; i < tempData.length; i++) {
                $scope.Items.push({
                    _id: tempData[i]._id,
                    name: tempData[i].name,
                    cost: tempData[i].cost,
                    isFine: tempData[i].isFine,
                    isEdit: false
                });
            }
        }, function(response) {
            console.log(response.status);
        });
    };
    $scope.addItem = function() {
        var data = {
            name: $scope.userInput.name,
            cost: $scope.userInput.cost,
            isFine: false
        }
        requests.postData(data).then(function(response) {
            $scope.loadData();
            $scope.userInput = {};
        }, function(response) {
            console.log(response.status);
        });
    };
    $scope.remove = function(id) {
        requests.delData(id).then(function(response) {
            $scope.loadData();
        }, function(response) {
            console.log(response.status);
        });
    };
    $scope.toggleEdit = function(index) {
        $scope.Items[index].isEdit = !$scope.Items[index].isEdit;
    };
    $scope.save = function(id, data) {
        requests.updatData(id, data).then(function(response) {
            $scope.loadData();
        }, function(response) {
            console.log(response.data);
        });
    }
});