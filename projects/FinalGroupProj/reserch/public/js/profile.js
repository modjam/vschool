var app = angular.module('myApp.profile', ['ngRoute', "privModule", "userModule","requestsModule"]);

app.config(function ($routeProvider) {
    $routeProvider.when('/profile', {
        templateUrl: '/views/profile.html',
        controller: 'profileController'
    });
});


app.controller("profileController", function ($scope, privService, userService, $http,reqService) {
    $scope.pItems = [];
    $scope.userInput = {};
    $scope.priv = privService.getPriv();
    $scope.usernameLoggedIn = userService.getUser();
    console.log($scope.priv);
    console.log($scope.usernameLoggedIn);
    //  $scope.loadData = function() {
    //    reqService.get().then(function(response) {
    //      //suc
    //      $scope.pItems = response.data.data;
    //      $scope.pItems = $scope.pItems.map(function(item) {
    //        item.isEdit = false;
    //        return item;
    //      });
    //      console.log($scope.pItems);
    //    }, function(response) {
    //      //fail
    //      console.log(response.status);
    //    });
    //        }
    $scope.loadMyData = function () {
//        $http.get('/routes/' + $scope.usernameLoggedIn)
            reqService.getMydata($scope.usernameLoggedIn).then(function (response) {
            console.log("hi get my data")
            $scope.pItems = response.data.data;
//            $scope.pItems = $scope.pItems.map(function(item) {
//                reqService.getImg(item).then(function(response) {
//                    item.url = response.data.data.url;
//                }, function(response) {
//                     item.url="../profileImg.jpg";
//                    console.log(response.status);
//                });
//            })


            console.log($scope.pItems);
            console.log(response.data)
        }, function (response) {
            //fail
            console.log(response.status);
        });
    }

});

   