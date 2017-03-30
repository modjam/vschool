var app = angular.module("app", ["ngRoute", "app.resume", "app.work", "app.contact"]);

app.config(function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider.when("/", {
        redirectTo : "/home"
    }).otherwise({
        redirectTo : "/home"
    })
})

app.controller("ctrl",function($scope) {
   
})

