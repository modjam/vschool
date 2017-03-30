var app = angular.module("req", []);


app.service("requests", function ($http) {
	this.getData = function () {
		return $http.get("http://localhost:8080/menu/");
	}
	this.postData = function (data) {
		return $http.post("http://localhost:8080/menu/", data);
	}
	this.delData = function (id) {
		return $http.delete("http://localhost:8080/menu/" + id);
	}
	this.updatData = function (id, data) {
		var queryString = "";
		var fullString = "";
		for (key in data) {
			queryString += key + "=" + data[key];
			fullString = fullString + queryString + "&";
			queryString = "";
		}
		return $http.put("http://localhost:8080/menu/" + id + "?" +fullString);
	}
});