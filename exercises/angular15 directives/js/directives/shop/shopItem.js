var app = angular.module('shopModule', []);

app.directive('itemInShop', function() {
	return {
		scope: {
			name: "=",
			amount: "=",
			price: "=",
			curr: "@"
		},
		restrict: "AE",
		templateUrl: "js/directives/shop/shopItem.html",
		link: function(scope, elem, attr) {
			var btn = elem.find("button");
			btn.bind("click", function() {
				scope.total = scope.amount * scope.price;
				scope.$apply();
			})
		}
	}	
});