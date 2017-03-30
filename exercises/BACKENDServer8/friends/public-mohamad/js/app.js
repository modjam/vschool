var app = angular.module("app", []);

app.service("myService", function ($http) {
    this.getData = function () {
        return $http.get("http://localhost:8080/menu/")
    }
    this.postData = function (myData) {
        console.log(myData);
        return $http.post("http://localhost:8080/menu/", myData)
    }
    this.deleteData = function (id) {
        return $http.delete("http://localhost:8080/menu/" + id)
    }
    this.updateData = function (id, data) {
        var str = "?";
        for(key in data) {
            str += key;
            str += "=";
            str += data[key];
            str += "&"
        }
        return $http.put("http://localhost:8080/menu/" + id + str)
    }
})

app.controller("ctrl", function ($scope, myService) {
    $scope.oldData = [];
    $scope.updatedData = [];
    $scope.updateBtn = [];
    $scope.takeUpdate = [];
    $scope.loadData = function () {
        myService.getData().then(function (response) {
            $scope.menuList = response.data.data;
            for (var i = 0; i < $scope.menuList.length; i++) {
                $scope.oldData[i] = true;
                $scope.updatedData[i] = false;
                $scope.updateBtn[i] = true;
                $scope.takeUpdate[i] = false;
            }
        }, function (response) {
            console.log(response.status)
        })
    }

    $scope.add = function () {
        var myData = {
            name: $scope.name,
            cost: $scope.cost,
            type: $scope.type
        }
        myService.postData(myData).then($scope.loadData)
    }

    $scope.del = function (id) {
        myService.deleteData(id).then($scope.loadData)
    }

    $scope.updateData = function (index) {
        $scope.oldData[index] = false;
        $scope.updatedData[index] = true;
        $scope.updateBtn[index] = false;
        $scope.takeUpdate[index] = true;
    }
    $scope.confirmUpdate = function (index, id, name, cost, type) {
        var data = {
            name: name,
            cost: cost,
            type: type
        }
        myService.updateData(id,data)
        $scope.oldData[index] = true;
        $scope.updatedData[index] = false;
        $scope.updateBtn[index] = true;
        $scope.takeUpdate[index] = false;
        
    }
})