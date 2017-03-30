var store = angular.module("myStore", []);

store.service("addService", function () {
    this.itemList = [];
	this.total=0;
	this.add = function(name, cost) {
		this.itemList.push({
			name: name,
			cost: cost
		});
		this.total += cost;
	}
});