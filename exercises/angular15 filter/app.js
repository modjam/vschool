var app = angular.module('app', []);

app.controller('MainController', function($scope) {
	$scope.searchTerm = "";
	$scope.data = [
		{
			name: "ahmad.h",
			age: 25
		},
		{
			name: "samer.k",
			age: 15
		},
		{
			name: "hani.f",
			age: 5
		},
		{
			name: "ziad.s",
			age: 35
		},
	]
});

app.filter('search', function() {
	return function(input, term) {
		var result = [];
		for(var i=0; i<input.length; i++) {
			if(input[i].name.indexOf(term) != -1) {
				result.push(input[i]);
			}
		}
		return result;
	}
});

