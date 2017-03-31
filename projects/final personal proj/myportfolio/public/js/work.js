var app = angular.module("app.work", ["ngRoute", "apiModule"]);

app.config(function($routeProvider) {
    $routeProvider.when("/work", {
        templateUrl : "../views/work.html",
        controller: "workCtrl"
    });
});

app.controller("workCtrl", function($scope, apiService) {
    var slideIndex = 1;
    showDivs(slideIndex);

    function plusDivs(n) {
        showDivs(slideIndex += n);
    }

    function showDivs(n) {
        var i;
        var x = document.getElementsByClassName("mySlides");
        if (n > x.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = x.length
        }
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[slideIndex - 1].style.display = "block";
    }
    
    $scope.userInput = {};
    $scope.loadData = function() {
        apiService.getData().then(function(response) {
            $scope.list = [];
            var temp = response.data.data;
            for(var i = 0; i < temp.length; i++) {
                $scope.list.push({
                    _id: temp[i]._id,
                    name: temp[i].name,
                    isEdit: false
                })
            }
        })
    }
    $scope.add = function() {
        var data = {
            name : $scope.userInput.name
        }
        apiService.postData(data).then($scope.loadData);
         $scope.userInput = {};
        
    }
    $scope.remove = function(id) {
        apiService.deleteData(id).then($scope.loadData)
    }
    $scope.edit = function(index) {
        $scope.list[index].isEdit = !$scope.list[index].isEdit
    }
    $scope.save = function(id, item) {
        
        var data = {
            name: item.name
        }
        apiService.updateData(id,data).then($scope.loadData)
    }
});
