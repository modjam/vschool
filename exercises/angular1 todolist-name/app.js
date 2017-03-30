var ang = angular.module("app", []);
ang.service("studentService", function () {
    this.studentsArr = [];
    this.add = function (name) {
        this.studentsArr.push(name);
    }
     this.remove = function (index) {
        this.studentsArr.splice(index,1);
    }
});
ang.controller("control", function ($scope, studentService) {
    $scope.students = studentService.studentsArr;
    $scope.submit = function () {
        var stdname = $scope.stdName;
        studentService.add(stdname);

    };
       $scope.remove = function (index) {
        studentService.remove(index);

    };
});