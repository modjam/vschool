var app = angular.module("myApp", []);
app.service("todoReq", function ($http) {
    this.getData = function () {
        return $http.get("http://localhost:8080/menu");
    }
    this.postData = function (data) {
        return $http.post("http://localhost:8080/menu/", data);
    }
    this.deleteData = function (id) {
        return $http.delete("http://localhost:8080/menu/" + id);
    }
    this.editData = function (id, data) {
        var queryString = "";
        for (key in data) {
            queryString += key + "=" + data[key]
        }
        return $http.put("http://localhost:8080/menu/" + id + "?" + queryString);
    }
});

app.controller("myCtrl", function ($scope, todoReq) {
    $scope.loadData = function () {
        todoReq.getData().then(function (response) {
            $scope.todoItems = response.data;
        }, function (response) {
            console.log(response.status);
        })
    };
    $scope.add = function () {
        var data = {
            name: $scope.task
        }
        todoReq.postData(data).then($scope.loadData, function (error) {
            console.log(error.status);
        });
        $scope.task = "";
    }

    $scope.edit = function (id, editinput) {
        var data = {
            name: editinput
        }
        console.log(editinput);
        todoReq.editData(id, data).then(function () {
            console.log(data.name);
        }, function (error) {
            console.log(error.status);
        });
        $scope.edititem = "";
        $scope.loadData();
    }
    $scope.deleteItem = function (_id) {
        todoReq.deleteData(_id).then($scope.loadData, function (error) {
            console.log(error.status);
        });
    }
});