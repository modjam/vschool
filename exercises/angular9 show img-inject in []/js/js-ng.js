var store = angular.module("myStore", []);

store.service("addService", function() {
	this.arr = [];
	this.submit = function(title, description, url) {
		this.arr.push({
			title: title,
			description: description,
			url: url
		})
	}
})

    