var app = angular.module('nameModule', []);

app.directive('name', function() {
	return {
		scope: {
//			title: "@",
			title: "=",
			colorOfText: "@"
		},
		restrict: "AE",
		templateUrl: "js/directives/name/name.html",
		link: function(scope, elem, attr) {
			elem.bind("click", function() {
				scope.title = "hahaha";
				scope.$apply();
				elem.css("color", scope.colorOfText);
			})
		}
	}	
});