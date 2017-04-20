var app = angular.module("todoApp", ["ngRoute", "app.home", "app.signup", "app.signin", "tokenModule"]);

app.config(function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix("");
  $routeProvider.when("/", {
    redirectTo: "/home"
  }).otherwise({
    redirectTo: "/home"
  });
});

app.service("AuthSerivce", function($q, $location, tokenService ) {
  this.request = function(config) {
    var token = tokenService.getToken();
    if(token) {
      config.headers = config.headers || {};
      config.headers.Authorization = "Bearer " + token;
    }
    return config;
  };

  this.responseError = function(response) {
    if(response.status == 401) {
      alert("Token is no longer valid");
      $location.path("/signin")
    }
    return $q.reject(response);
  };
});

app.config(function($httpProvider) {
  $httpProvider.interceptors.push("AuthSerivce");
})

app.controller("homeCtrl",function($scope,tokenService,$location){
    $scope.logout=function(){
        tokenService.removeToken();
        $location.path("/");
    }
})