var app = angular.module("app.signin", ["ngRoute", "authModule", "tokenModule", "userModule","privModule"]);

app.config(function($routeProvider) {
  $routeProvider.when("/signin", {
    templateUrl: "/views/signin.html",
    controller: "signinCtrl"
  });
});

app.controller("signinCtrl", function($scope, authService, $location, tokenService, privService, userService,$http) {
  $scope.userinput = {};
    $scope.priv=privService.getPriv();
//    $scope.userData=function(){
//    $http.get('/routes/username');
//  
//};
    $scope.signin = function() {
       authService.postSignin($scope.userinput).then(function(response) {
      tokenService.setToken(response.data.token);
      privService.setPriv(response.data.priv);
           $scope.priv=privService.getPriv();
       userService.setUser(response.data.username); 
     if( $scope.priv=="user"){
         $location.path("/community");
     }
//           else if($scope.userData.length>0) {
//          $location.p\ath("/profile");
//     }
           else{
         $location.path("/profile")
     }
        
       
    }, function(response) {
      console.log(response.status);
    });
  }
});
