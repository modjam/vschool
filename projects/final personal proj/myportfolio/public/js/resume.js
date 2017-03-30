var app = angular.module("app.resume", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider.when("/resume", {
        templateUrl : "../views/resume.html",
        controller: "resumeCtrl"
    });
});

app.controller("resumeCtrl", function($scope) {
    
});