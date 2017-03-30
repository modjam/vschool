var app = angular.module("app", []);
app.controller("control", function($scope) {
    $scope.arr=[];
    $scope.submitted= false;
    $scope.submit = function() {
        $scope.submitted=!$scope.submitted;
        $scope.arr.push({
            firstName: $scope.firstName,
            lastName: $scope.lastName,
            email: $scope.email,
            placeOfBirth: $scope.placeOfBirth,
            phone: $scope.phone,
            food: $scope.food,
            info: $scope.info
     })  
//        $scope.firstName="";
//        $scope.lastName="";
//        $scope.email="";
//        $scope.placeOfBirth="";
//        $scope.phone="";
//        $scope.food="";
//        $scope.info="";
   }
})