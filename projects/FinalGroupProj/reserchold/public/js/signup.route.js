var app = angular.module("app.signup", ["ngRoute", "authModule","privModule"]);

app.config(function($routeProvider) {
  $routeProvider.when("/signup", {
    templateUrl: "/views/signup.html",
    controller: "signupCtrl"
  });
});

app.controller("signupCtrl", function($scope, authService, $location,privService) {
  $scope.userinput = {};
  $scope.signup = function() {
      
    authService.postSignup($scope.userinput).then(function(response) {
      alert("You have signed up for an account");
         privService.setPriv(response.data.priv);
      $location.path("/signin");
    }, function(response) {
      console.log(response.status);
    });
  }
});
