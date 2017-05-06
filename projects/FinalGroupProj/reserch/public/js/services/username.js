var app = angular.module("userModule", []);

app.service("userService", function() {
  this.setUser = function(username) {
    localStorage["username"] = username;
  };
  this.getUser = function() {
    return localStorage["username"];
  };
  this.removeUser = function() {
    localStorage.removeItem("username");
  };
});